import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
    name: String, 
    content: String, 
    type : String,
    imageUrl: String, 
});
const article = mongoose.model("Article", articleSchema);

export default article;