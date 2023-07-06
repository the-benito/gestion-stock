import { Component } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
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
}
