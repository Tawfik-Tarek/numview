import { Component, Input } from '@angular/core';
import { NumberHeader } from '../../models/number-data.model';

@Component({
  selector: 'app-number-header',
  imports: [],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss',
})
export class NumberHeaderComponent {
  @Input() headerData!: NumberHeader;
}
