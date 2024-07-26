import { Injectable } from '@angular/core';
import { Filter } from '../interfaces';
import { FilterOperator } from '../models';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class BetweenFilter implements Filter {
  supportedOperators: FilterOperator[] = ['between'];

  filter(value: any, filter: any): boolean {
    const { from, to } = filter as { from: Date; to: Date };
    if (from && !to) {
      return moment(value).isSameOrAfter(from);
    }
    if (!from && to) {
      return moment(value).isSameOrBefore(to);
    }
    if (from && to) {
      return (
        moment(value).isSameOrAfter(from) && moment(value).isSameOrBefore(to)
      );
    }

    return false;
  }
}
