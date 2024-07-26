export type FilterOperator = 'eq' | 'in' | 'contains' | 'between';

export interface TableFilter {
  value: string | string[] | { from: Date; to: Date } | null;
  operator: FilterOperator;
}
