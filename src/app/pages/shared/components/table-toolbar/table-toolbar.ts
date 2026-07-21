import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() search = new EventEmitter<string>();

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
