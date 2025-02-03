import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { TableData } from '../../models/number-data.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() tableData!: TableData;
  data: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableData'] && this.tableData) {
      this.data = this.tableData.data;
    }
  }
  itemsPerPage = 5;
  currentPage = 1;

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changeItemsPerPage(event: Event) {
    this.itemsPerPage = parseInt((event.target as HTMLSelectElement).value, 10);
    this.currentPage = 1;
  }

  totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get pageNumbers() {
    const total = this.totalPages();
    const maxPagesToShow = 5;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(maxPagesToShow / 2)
    );
    let endPage = Math.min(total, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }
}
