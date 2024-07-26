import { Injectable } from '@angular/core';
import { Filter } from '../interfaces';
import { FilterOperator } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ContainsFilter implements Filter {
  supportedOperators: FilterOperator[] = ['contains'];

  filter(value: any, filter: any): boolean {
    return value.includes(filter);
  }
}
