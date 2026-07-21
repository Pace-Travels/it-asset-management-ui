import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, SelectModule],
  templateUrl: './filter-modal.html',
  styleUrl: './filter-modal.scss',
})
export class FilterModal {

  @Input() visible = false;

  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() apply = new EventEmitter<any>();

  @Output() reset = new EventEmitter<void>();

  filterModel = {

    category: null,

    brand: null,

    status: null,

    assignedTo: null

  };

  categoryList = [];

  brandList = [];

  statusList = [];

  employeeList = [];

  close() {

    this.visible = false;

    this.visibleChange.emit(false);

  }

  applyFilter() {

    this.apply.emit(this.filterModel);

    this.close();

  }

  resetFilter() {

    this.filterModel = {

      category: null,

      brand: null,

      status: null,

      assignedTo: null

    };

    this.reset.emit();

  }

}
