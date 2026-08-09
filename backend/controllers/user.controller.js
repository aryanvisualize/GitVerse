const getAuthUser = (req) => req.user || req.session?.user;

const getLikesStore = (req) => {
	req.app.locals.likesByUsername ??= new Map();
	return req.app.locals.likesByUsername;
};

const getLikedProfilesStore = (req) => {
	req.app.locals.likedProfilesByUsername ??= new Map();
	return req.app.locals.likedProfilesByUsername;
};

const getUserModel = (user) => {
	if (typeof user?.constructor?.findOne === "function") return user.constructor;
	return null;
};

export const getUserProfileAndRepos = async (req, res)=>{
    const { username } = req.params;
	try {
		// 60 requests per hour, 5000 requests per hour for authenticated requests
		// https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28
		const userRes = await fetch(`https://api.github.com/users/${username}`, {
			headers: {
				authorization: `token ${process.env.GITVERSE_API_KEY}`,
			},
		});

		const userProfile = await userRes.json();

		const repoRes = await fetch(userProfile.repos_url, {
			headers: {
				authorization: `token ${process.env.GITVERSE_API_KEY}`,
			},
		});
		const repos = await repoRes.json();

		res.status(200).json({ userProfile, repos });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getLikes = async (req, res) => {
	try {
		const user = getAuthUser(req);
		if (!user?.username) return res.status(401).json({ error: "Unauthorized" });

		const likedBy = Array.isArray(user.likedBy)
			? user.likedBy
			: getLikesStore(req).get(user.username) || [];

		res.status(200).json({ likedBy });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const likeProfile = async (req, res) => {
	try {
		const user = getAuthUser(req);
		const { username } = req.params;

		if (!user?.username) return res.status(401).json({ error: "Unauthorized" });
		if (!username) return res.status(400).json({ error: "Username is required" });
		if (user.username === username) return res.status(400).json({ error: "You cannot like your own profile" });

		const likedProfilesStore = getLikedProfilesStore(req);
		const userLikedProfiles = likedProfilesStore.get(user.username) || new Set(user.likedProfiles || []);
		if (userLikedProfiles.has(username)) return res.status(400).json({ error: "Profile already liked" });

		const like = {
			username: user.username,
			avatarUrl: user.avatarUrl,
			likedDate: new Date(),
		};

		const User = getUserModel(user);
		const userToLike = User ? await User.findOne({ username }) : null;

		if (userToLike) {
			userToLike.likedBy ??= [];
			userToLike.likedBy.push(like);
			user.likedProfiles ??= [];
			user.likedProfiles.push(username);

			await Promise.all([userToLike.save(), typeof user.save === "function" ? user.save() : null]);
		} else {
			const likesStore = getLikesStore(req);
			const likedBy = likesStore.get(username) || [];
			likedBy.push(like);
			likesStore.set(username, likedBy);
		}

		userLikedProfiles.add(username);
		likedProfilesStore.set(user.username, userLikedProfiles);

		res.status(200).json({ message: "Profile liked" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
