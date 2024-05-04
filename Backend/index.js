import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import articleRoute from "./route/article.route.js";
import userRoute from "./route/user.route.js";
import { app as viewCounterApp, viewCount } from './route/view.route.js'; 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

dotenv.config();

const URI = process.env.MongoDBURI;

try {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB:", error);
}

app.use("/article", articleRoute);
app.use("/user", userRoute);
app.use('/', viewCounterApp);

app.get('/views', (req, res) => {
  res.json({ views: viewCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

