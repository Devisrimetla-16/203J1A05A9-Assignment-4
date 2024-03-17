import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'MILK', price: 10, description: '1litre' },
    { name: 'SUGAR', price: 20, description: '1kg' },
    { name: 'COFFEE', price: 30, description: '150grams' }
  ];
}


