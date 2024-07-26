import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableFilters } from '../models/table-filters';
import { FilterOperator } from '../models/table-filter';

@Injectable()
export class TableFiltersStateService {
  private state: BehaviorSubject<TableFilters> = new BehaviorSubject<any>({});

  public state$ = this.state.asObservable();

  public setFilterValue(
    property: string,
    value: any,
    operator: FilterOperator
  ): void {
    const currentState = this.state.getValue();
    this.state.next({
      ...currentState,
      [property]: {
        value,
        operator,
      },
    });
  }
}
