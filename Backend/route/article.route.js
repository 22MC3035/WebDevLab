import express from "express";
import {getArticle} from "../controller/article.controller.js";

const router = express.Router();

router.get("/", getArticle);

export default router;