import article from "../model/article.model.js";

export const getArticle = async (req, res) => {
    try {
        const articles = await article.find();
        res.status(200).json(articles);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
