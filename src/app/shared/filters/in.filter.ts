import { Injectable } from '@angular/core';
import { Filter } from '../interfaces';
import { FilterOperator } from '../models';

@Injectable({
  providedIn: 'root',
})
export class InFilter implements Filter {
  supportedOperators: FilterOperator[] = ['in'];

  filter(value: any, filter: any): boolean {
    return (filter as any[]).includes(value);
  }
}
