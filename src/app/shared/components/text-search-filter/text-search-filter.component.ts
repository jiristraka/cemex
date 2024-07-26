import { Component, Input } from '@angular/core';
import { TableFiltersStateService } from '../../services';

@Component({
  selector: 'cx-text-search-filter',
  templateUrl: './text-search-filter.component.html',
  standalone: true,
})
export class TextSearchFilterComponent {
  @Input({ required: true }) field!: string;
  @Input() placeholder: string = '';

  constructor(private filtersStateService: TableFiltersStateService) {}

  onSearch(searchText: string): void {
    this.filtersStateService.setFilterValue(this.field, searchText, 'contains');
  }
}
