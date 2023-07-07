import express from "express";
import { Article } from "./interfaces/Article";

const app = express.Router();

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Marteau", price: 4.99, qty: 40 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/articles", (req, resp) => {
  resp.json(articles);
});

export const api = app;
