import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  data = [
    {
      client: 'الشركة الألمانية للإبادة...',
      dateAssigned: '01/12/2024',
      dateCanceled: '-',
      manager: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
    },
    {
      client: 'الشركة الألمانية للإبادة...',
      dateAssigned: '01/12/2024',
      dateCanceled: '01/12/2024',
      manager: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
    },
    {
      client: 'الشركة الألمانية للإبادة...',
      dateAssigned: '01/12/2024',
      dateCanceled: '01/12/2024',
      manager: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
    },
    {
      client: 'الشركة الألمانية للإبادة...',
      dateAssigned: '01/12/2024',
      dateCanceled: '01/12/2024',
      manager: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
    },
    {
      client: 'الشركة الألمانية للإبادة...',
      dateAssigned: '01/12/2024',
      dateCanceled: '01/12/2024',
      manager: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
    },
    {
      client: 'الشركة الألمانية للإبادة...',
      dateAssigned: '01/12/2024',
      dateCanceled: '01/12/2024',
      manager: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
    },
  ];

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
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }
}
