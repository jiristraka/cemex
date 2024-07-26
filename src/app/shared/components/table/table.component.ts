import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { TableColumnComponent } from '../table-column/table-column.component';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FilteringService, TableFiltersStateService } from '../../services';

@UntilDestroy()
@Component({
  selector: 'cx-table',
  templateUrl: './table.component.html',
  imports: [NgForOf, NgIf, NgClass, NgTemplateOutlet],
  providers: [TableFiltersStateService, FilteringService],
  standalone: true,
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() filterChange = new EventEmitter<any>();

  @ContentChildren(TableColumnComponent)
  columns: QueryList<TableColumnComponent> =
    new QueryList<TableColumnComponent>();

  public filteredData: any[] = [];

  constructor(
    private filtersStateService: TableFiltersStateService,
    private filteringService: FilteringService
  ) {}

  ngOnInit(): void {
    this.filtersStateService.state$
      .pipe(untilDestroyed(this))
      .subscribe((filtersState) => {
        this.filteredData = this.filteringService.filterData(
          this.data,
          filtersState
        );
      });
  }
}
