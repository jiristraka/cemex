import { Inject, Injectable } from '@angular/core';
import { TableFilter, TableFilters } from '../models';
import { AVAILABLE_FILTERS } from '../filters';
import { Filter } from '../interfaces';

@Injectable()
export class FilteringService {
  constructor(@Inject(AVAILABLE_FILTERS) private filters: Filter[]) {}

  public filterData(data: any[], filters: TableFilters): any[] {
    return data.filter((item) => {
      return Object.keys(filters).every((key) => {
        const filter = filters[key] as TableFilter;
        if (!filter.value) {
          return true;
        }

        const filterInstance = this.filters.find((f) =>
          f.supportedOperators.includes(filter.operator)
        );

        if (!filterInstance) {
          return true;
        }

        return filterInstance.filter(item[key], filter.value);
      });
    });
  }
}
