// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// export interface Product {
//   name: string;
//   SKU: string;
//   price: number;
//   stock: string;
//   categories: string[];
//   availability: number;
//   description: string;
// }

// export interface Order {
//   item: string;
//   date: string;
//   total: number;
//   status: 'Processing' | 'Completed';
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   private orders: Order[] = [
//     { item: 'Mens Black T-Shirts', date: '20 Mar, 2023', total: 75, status: 'Processing' },
//     { item: 'Essential Neutrals', date: '19 Mar, 2023', total: 22, status: 'Processing' },
//     { item: 'Sleek and Cozy Black', date: '7 Feb, 2023', total: 57, status: 'Completed' },
//     { item: 'MOCKUP Black', date: '29 Jan, 2023', total: 30, status: 'Completed' },
//     { item: 'Monochromatic Wardrobe', date: '27 Jan, 2023', total: 27, status: 'Completed' },
//   ];

//   constructor() {}

//   getOrders(): Observable<Order[]> {
//     return of(this.orders);
//   }

//   getTotalSales(): Observable<number> {
//     const total = this.orders.reduce((acc, order) => acc + order.total, 0);
//     return of(total);
//   }

//   getCustomerCount(): Observable<number> {
//     return of(2571); // Simulated value
//   }

//   getOrdersCount(): Observable<number> {
//     return of(734); // Simulated value
//   }
// }


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  name: string;
  SKU: string;
  price: number;
  stock: string;
  categories: string[];
  availability: number;
  description: string;
}

export interface Order {
  item: string;
  date: string;
  total: number;
  status: 'Processing' | 'Completed';
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private orders: Order[] = [
    { item: 'Mens Black T-Shirts', date: '20 Mar, 2023', total: 75, status: 'Processing' },
    { item: 'Essential Neutrals', date: '19 Mar, 2023', total: 22, status: 'Processing' },
    { item: 'Sleek and Cozy Black', date: '7 Feb, 2023', total: 57, status: 'Completed' },
    { item: 'MOCKUP Black', date: '29 Jan, 2023', total: 30, status: 'Completed' },
    { item: 'Monochromatic Wardrobe', date: '27 Jan, 2023', total: 27, status: 'Completed' },
  ];

  constructor() {}

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  getTotalSales(): Observable<number> {
    const total = this.orders.reduce((acc, order) => acc + order.total, 0);
    return of(total);
  }

  getCustomerCount(): Observable<number> {
    return of(2571); // Simulated value
  }

  getOrdersCount(): Observable<number> {
    return of(734); // Simulated value
  }
}
