import { Component, Input } from '@angular/core';
import { FooterData } from '../../models/number-data.model';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() footerData!: FooterData;
}
