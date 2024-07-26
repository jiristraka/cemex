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
import {
  AVAILABLE_FILTERS,
  BetweenFilter,
  ContainsFilter,
  EqFilter,
  InFilter,
} from './shared/filters';

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
  providers: [
    { provide: AVAILABLE_FILTERS, useClass: InFilter, multi: true },
    { provide: AVAILABLE_FILTERS, useClass: ContainsFilter, multi: true },
    { provide: AVAILABLE_FILTERS, useClass: BetweenFilter, multi: true },
    { provide: AVAILABLE_FILTERS, useClass: EqFilter, multi: true },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cemex-app';

  public tableData = ORDER_HISTORY_ITEMS;
}
