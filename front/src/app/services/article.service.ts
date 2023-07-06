import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      id: 'a1',
      name: 'Tournevis',
      price: 2.99,
      qty: 120,
    },
    {
      id: 'a2',
      name: 'Marteau',
      price: 4.99,
      qty: 40,
    },
  ];

  constructor() {}
}
