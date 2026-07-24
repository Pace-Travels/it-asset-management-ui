import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {

  @Input() pageNumber = 1;

  @Input() totalPages = 1;

  @Input() totalRecords = 0;

  @Input() pageSize = 10;

  @Output() pageSizeChange = new EventEmitter<number>();

  @Output() pageChange = new EventEmitter<number>();

  previous() {

    if (this.pageNumber > 1) {

      this.pageChange.emit(this.pageNumber - 1);

    }

  }

  next() {

    if (this.pageNumber < this.totalPages) {

      this.pageChange.emit(this.pageNumber + 1);

    }

  }

  get endRecord(): number {

    return Math.min(this.pageNumber * this.pageSize, this.totalRecords);

  }

  get startRecord(): number {

    if (this.totalRecords === 0) {
      return 0;
    }

    return ((this.pageNumber - 1) * this.pageSize) + 1;

  }

  onPageSizeChange(event: Event): void {

    const value = Number((event.target as HTMLSelectElement).value);

    this.pageSizeChange.emit(value);

  }
}