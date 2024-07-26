import { Injectable } from '@angular/core';
import { TableFilter, TableFilters } from '../models';
import moment from 'moment';

@Injectable()
export class FilteringService {
  public filterData(data: any[], filters: TableFilters): any[] {
    return data.filter((item) => {
      return Object.keys(filters).every((key) => {
        const filter = filters[key] as TableFilter;
        if (!filter.value) {
          return true;
        }

        if (filter.operator === 'contains') {
          return item[key].includes(filter.value);
        }

        if (filter.operator === 'in') {
          return (filter.value as any[]).includes(item[key]);
        }

        if (filter.operator === 'eq') {
          return item[key] === filter.value;
        }

        if (filter.operator === 'between') {
          const { from, to } = filter.value as { from: Date; to: Date };
          if (from && !to) {
            return moment(item[key]).isSameOrAfter(from);
          }
          if (!from && to) {
            return moment(item[key]).isSameOrBefore(to);
          }
          if (from && to) {
            return (
              moment(item[key]).isSameOrAfter(from) &&
              moment(item[key]).isSameOrBefore(to)
            );
          }
        }

        return true;
      });
    });
  }
}
