import { Component } from '@angular/core';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  errorMsg = '';
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  faCircleNotch = faCircleNotch;
  selectedArticles = new Set<Article>();

  constructor(protected readonly articleService: ArticleService) {
    if (articleService.articles$.value === undefined) {
      of(undefined)
        .pipe(switchMap(() => articleService.refresh()))
        .subscribe();
    }
  }

  getArticleId(index: number, a: Article) {
    return a.id;
  }

  refresh() {
    of(undefined).pipe(
      tap(() => {
        this.articleService.refresh();
      }),
      catchError((err) => {
        console.log('err: ', err);
        return of(undefined);
      })
    );
  }

  remove() {
    console.log('remove');
    of(undefined)
      .pipe(
        switchMap(() => {
          const ids = [...this.selectedArticles].map((a) => a.id);
          return this.articleService.delete(ids);
        }),
        switchMap(() => this.articleService.refresh()),
        tap(() => {
          this.selectedArticles.clear();
        }),
        catchError((err) => {
          console.log('err: ', err);
          this.errorMsg = 'Erreur technique';
          return of(undefined);
        })
      )
      .subscribe();
  }

  select(a: Article) {
    this.selectedArticles.has(a)
      ? this.selectedArticles.delete(a)
      : this.selectedArticles.add(a);
  }
}
