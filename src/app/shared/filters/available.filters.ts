import { InjectionToken } from '@angular/core';
import { Filter } from '../interfaces';

export const AVAILABLE_FILTERS = new InjectionToken<Filter[]>(
  'AvailableFilters'
);
