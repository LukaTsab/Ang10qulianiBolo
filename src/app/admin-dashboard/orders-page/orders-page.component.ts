// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-orders-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './orders-page.component.html',
//   styleUrl: './orders-page.component.css'
// })
// export class OrdersPageComponent {

// }


// 2
// import { Component, OnInit } from '@angular/core';
// import { OrdersService, Order } from '../services/orders.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-orders-page',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './orders-page.component.html',
//   styleUrl: './orders-page.component.css',
// })
// export class OrdersPageComponent implements OnInit {
//   orders: Order[] = [];

//   constructor(private ordersService: OrdersService) {}

//   ngOnInit() {
//     this.orders = this.ordersService.getOrders();
//   }
// }


// 3
import { Component, OnInit } from '@angular/core';
import { OrdersService, Order } from '../services/orders.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css',
})
export class OrdersPageComponent implements OnInit {
  orders: Order[] = [];
  searchTerm: string = ''; // Property to store the search input

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
}

get filteredOrders(): Order[] {
  if (!this.searchTerm) {
    return this.orders; // Return all orders if no search term
  }
  const lowerTerm = this.searchTerm.toLowerCase();
  return this.orders.filter(order =>
    order.item.toLowerCase().includes(lowerTerm) ||
    order.status.toLowerCase().includes(lowerTerm) ||
    order.date.includes(this.searchTerm) // Search in item name, status, or date
  );
}
}