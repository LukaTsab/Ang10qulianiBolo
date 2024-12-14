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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['dashboard/products/add']);
  }
}
