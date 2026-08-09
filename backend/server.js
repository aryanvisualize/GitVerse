import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js"
import exploreRoutes from "./routes/explore.route.js"

dotenv.config();
const app = express();
const port = 7000;

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Server is ready");
});

app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRoutes)

app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
})