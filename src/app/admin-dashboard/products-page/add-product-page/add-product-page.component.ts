// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-product-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-product-page.component.html',
//   styleUrl: './add-product-page.component.css'
// })
// export class AddProductPageComponent {

// }


// 2

// import { Component } from '@angular/core';
// import { ProductsService, Product } from '../../services/products.service';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-add-product-page',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './add-product-page.component.html',
//   styleUrl: './add-product-page.component.css',
// })
// export class AddProductPageComponent {
//   product: Product = {
//     name: '',
//     sku: '',
//     price: 0,
//     stockStatus: 'in-stock',
//     category: '',
//     availableQuantity: 0,
//     description: '',
//     image: '',
//   };

//   constructor(private productsService: ProductsService, private router: Router) {}

//   addProduct(): void {
//     this.productsService.addProduct(this.product);
//     this.router.navigate(['/dashboard/products']);
//   }
// }


// 3

import { Component } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-product-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css',
})
export class AddProductPageComponent {
  product: Product = {
    name: '',
    sku: '',
    price: 0,
    stockStatus: 'in-stock',
    category: '',
    availableQuantity: 0,
    description: '',
    image: '', // Default image is empty
  };

  stockStatusOptions = ['in-stock', 'out-of-stock'];
  availableImages = [
    { path: 'assets/images/raw-black-tshirt.png', name: 'Black T-Shirt' },
    { path: 'assets/images/classic-monochrome.png', name: 'Classic Monochrome' },
    { path: 'assets/images/monochromatic.png', name: 'Monochromatic' },
  ];

  constructor(private productService: ProductsService, private router: Router) {}

  addProduct(): void {
    if (this.product.image) {
      this.productService.addProduct(this.product);
      this.router.navigate(['/dashboard/products']);
    } else {
      alert('Please select an image!');
    }
  }

  selectImage(imagePath: string): void {
    this.product.image = imagePath;
  }
}
