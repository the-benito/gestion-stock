import { Injectable } from '@angular/core';
import { Article, NewArticle } from '../interfaces/article';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

let articles: Article[] = [
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

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[] | undefined>(undefined);

  add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const article = { ...newArticle, id: crypto.randomUUID() };
        articles.push(article);
        this.articles$.next(articles);
      })
    );
  }

  refresh(): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        this.articles$.next(articles);
      })
    );
  }

  delete(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        articles = articles.filter((a) => !ids.includes(a.id));
        this.articles$.next(articles);
      })
    );
  }
}
