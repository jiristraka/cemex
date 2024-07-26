import { FilterOperator } from '../models';

export interface FilterService {
  supportedOperators: FilterOperator[];

  filter(operator: FilterOperator, value: any): boolean;
}
