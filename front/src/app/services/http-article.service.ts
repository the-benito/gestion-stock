import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article, NewArticle } from '../interfaces/article';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  override refresh(): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.get<Article[]>(url);
      }),
      map((articles) => {
        this.articles$.next(articles);
      })
    );
  }

  override add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.post<void>(url, newArticle);
      })
    );
  }

  override delete(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.delete<void>(url, {
          body: ids,
        });
      })
    );
  }
}
