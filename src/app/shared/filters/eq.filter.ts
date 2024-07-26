import { Injectable } from '@angular/core';
import { Filter } from '../interfaces';
import { FilterOperator } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EqFilter implements Filter {
  supportedOperators: FilterOperator[] = ['eq'];

  filter(value: any, filter: any): boolean {
    return value === filter;
  }
}