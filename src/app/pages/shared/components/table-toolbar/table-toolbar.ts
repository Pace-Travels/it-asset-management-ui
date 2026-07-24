import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterModal } from '../filter-modal/filter-modal';

@Component({
  selector: 'app-table-toolbar',
  imports: [FormsModule, FilterModal],
  templateUrl: './table-toolbar.html',
  styleUrl: './table-toolbar.scss',
})
export class TableToolbar {

  searchText = '';

  @Input() enableSearch = true;

  @Input() enableFilter = true;

  @Input() enableAdd = false;

  @Input() enableRefresh = false;

  @Input() enableExport = false;

  @Output() search = new EventEmitter<string>();

  @Output() add = new EventEmitter<void>();

  @Output() filter = new EventEmitter<void>();

  @Output() refresh = new EventEmitter<void>();

  @Output() export = new EventEmitter<void>();

  onSearch() {
    this.search.emit(this.searchText);
  }

  showFilterDialog = false;

  openFilter(): void {

    this.showFilterDialog = true;

  }

  applyFilter(filter: any): void {

    console.log('Filter Applied', filter);

  }

  resetFilter(): void {

    console.log('Filter Reset');

  }

}
