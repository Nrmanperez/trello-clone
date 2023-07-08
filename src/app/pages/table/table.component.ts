import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data.source';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total: number = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })

    this.input.valueChanges
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.dataSource.find(value)
    })
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
