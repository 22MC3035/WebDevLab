import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import article from './model/article.model.js'; 

dotenv.config();

const articles = express();
const PORT = process.env.PORT || 4000;

articles.use(express.json());

const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("Error connecting to MongoDB:", error));

articles.post('/articles', async (req, res) => {
    try {
        const { title, content, imageUrl, fontUrl } = req.body;
        const newArticle = new article({ title, content, imageUrl, fontUrl });
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create article' });
    }
});

export default articles;

