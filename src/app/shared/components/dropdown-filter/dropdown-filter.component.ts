import { Component, Input } from '@angular/core';
import { TableFiltersStateService } from '../../services';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'cx-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  imports: [NgbDropdownModule, NgForOf],
  standalone: true,
})
export class DropDownFilterComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) field!: string;
  @Input({ required: true }) options!: string[];
  @Input() placeholder: string = '';

  constructor(private filtersStateService: TableFiltersStateService) {}

  public selectedOption: string = '';

  public selectOption(option: string): void {
    this.selectedOption = option;
    this.filtersStateService.setFilterValue(this.field, option, 'eq');
  }
}
