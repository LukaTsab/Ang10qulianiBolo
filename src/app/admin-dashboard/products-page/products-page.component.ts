// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './products-page.component.html',
//   styleUrl: './products-page.component.css'
// })
// export class ProductsPageComponent {

// }




// 2

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductsService, Product } from '../services/products.service';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-products-page',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './products-page.component.html',
//   styleUrl: './products-page.component.css'
// })
// export class ProductsPageComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productsService: ProductsService) {}

//   ngOnInit(): void {
//     this.products = this.productsService.getProducts();
//   }
// }


// 3

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = [...this.products];
  }

  search(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.sku.includes(query)
    );
  }
}







