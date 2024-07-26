import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, NgClass } from '@angular/common';
import {
  DateRangeFilterComponent,
  DropDownFilterComponent,
  MultiChoiceFilterComponent,
  TableColumnComponent,
  TableComponent,
  TextSearchFilterComponent,
} from './shared/components';
import { ORDER_HISTORY_ITEMS } from './data/order-history-items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    NgClass,
    TableComponent,
    TableColumnComponent,
    TextSearchFilterComponent,
    MultiChoiceFilterComponent,
    DropDownFilterComponent,
    DateRangeFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cemex-app';

  public tableData = ORDER_HISTORY_ITEMS;
}
