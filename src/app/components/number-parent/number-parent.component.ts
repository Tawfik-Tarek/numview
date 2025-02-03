import { Component } from '@angular/core';
import { NumberHeaderComponent } from '../number-header/number-header.component';
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';
import { NumberData } from '../../models/number-data.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-number-parent',
  imports: [NumberHeaderComponent, TableComponent, FooterComponent, CommonModule,],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss',
})
export class NumberParentComponent {
  data!: NumberData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<NumberData>('/assets/data.json').subscribe((response) => {
      this.data = response;
    });
  }
}
