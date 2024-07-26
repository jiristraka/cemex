import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TableFiltersStateService } from '../../services';

@UntilDestroy()
@Component({
  selector: 'cx-multi-choice-filter',
  templateUrl: './multi-choice-filter.component.html',
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  standalone: true,
})
export class MultiChoiceFilterComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) field!: string;
  @Input({ required: true }) options!: string[];

  public form!: FormGroup<{
    selectedOptions: any;
  }>;

  get optionsFormArray(): FormArray {
    return this.form.controls.selectedOptions as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private filtersStateService: TableFiltersStateService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      selectedOptions: this.formBuilder.array([]),
    });

    this.options.forEach(() =>
      this.optionsFormArray.push(new FormControl(false))
    );

    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      const selectedOptionValues = this.form.value.selectedOptions
        .map((v: string, i: number) => (v ? this.options[i] : null))
        .filter((v: string) => v !== null);
      const value = selectedOptionValues.length ? selectedOptionValues : null;

      this.filtersStateService.setFilterValue(this.field, value, 'in');
    });
  }
}
