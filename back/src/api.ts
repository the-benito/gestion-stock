import express from "express";

const app = express.Router();

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Marteau", price: 4.99, qty: 40 },
];

app.get("/articles", (req, resp) => {
  resp.json(articles);
});

export const api = app;
