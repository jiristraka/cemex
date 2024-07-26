import { Component, Input } from '@angular/core';
import { TableFiltersStateService } from '../../services';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'cx-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  imports: [FormsModule, CalendarModule],
  standalone: true,
})
export class DateRangeFilterComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) field!: string;

  public dateRange = {
    from: null,
    to: null,
  };

  constructor(private filtersStateService: TableFiltersStateService) {}

  public onDateSelect(): void {
    this.filtersStateService.setFilterValue(
      this.field,
      this.dateRange,
      'between'
    );
  }
}
