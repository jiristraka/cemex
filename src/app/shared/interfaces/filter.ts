import { FilterOperator } from '../models';

export interface Filter {
  supportedOperators: FilterOperator[];

  filter(value: any, filter: any): boolean;
}
