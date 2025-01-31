import { Component } from '@angular/core';
import { NumberHeaderComponent } from "../number-header/number-header.component";
import { TableComponent } from "../table/table.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-number-parent',
  imports: [NumberHeaderComponent, TableComponent, FooterComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss'
})
export class NumberParentComponent {

}
