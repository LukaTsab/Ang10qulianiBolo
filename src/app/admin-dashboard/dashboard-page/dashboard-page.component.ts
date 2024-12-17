// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './dashboard-page.component.html',
//   styleUrl: './dashboard-page.component.css'
// })
// export class DashboardPageComponent {
  
// }


import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Order } from '../services/product.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  providers: [ProductService], // Provide the service here for standalone use
})
export class DashboardPageComponent implements OnInit {
  private productService = inject(ProductService);

  totalSales: number = 0;
  customerCount: number = 0;
  ordersCount: number = 0;
  monthlyGoal: number = 1000;
  ordersLeft: number = 0;
  recentOrders: Order[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productService.getTotalSales().subscribe((sales) => (this.totalSales = sales));
    this.productService.getCustomerCount().subscribe((count) => (this.customerCount = count));
    this.productService.getOrdersCount().subscribe((count) => {
      this.ordersCount = count;
      this.ordersLeft = this.monthlyGoal - count;
    });
    this.productService.getOrders().subscribe((orders) => {
      this.recentOrders = orders.slice(0, 5);
    });
  }
}
