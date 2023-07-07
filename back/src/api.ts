import express, { json } from "express";
import crypto from "node:crypto";
import { Article, NewArticle } from "./interfaces/Article";

const app = express.Router();

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Marteau", price: 4.99, qty: 40 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/articles", (req, resp) => {
  resp.json(articles);
});

app.use(json());

app.post("/articles", (req, resp) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: crypto.randomUUID() };
  articles.push(article);
  resp.status(201).end();
});

export const api = app;
