import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'cx-table-column',
  template: '',
  standalone: true,
})
export class TableColumnComponent {
  @Input() header: string = '';
  @Input() propertyName: string = '';
  @Input() cssClass: string = '';
  @ContentChild('template') public content: any;
}
