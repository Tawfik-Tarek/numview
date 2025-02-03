import { Component, HostListener, Input } from '@angular/core';
import { NumberHeader } from '../../models/number-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-header',
  imports: [CommonModule],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss',
})
export class NumberHeaderComponent {
  @Input() headerData!: NumberHeader;
  isDropdownVisible = false;

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }

  selectOption(option: string) {
    this.closeDropdown();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    this.closeDropdown();
  }
}
