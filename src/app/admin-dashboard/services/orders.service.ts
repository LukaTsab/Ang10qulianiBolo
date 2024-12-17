// import { Injectable } from '@angular/core';

// export interface Order {
//   item: string;
//   date: string;
//   total: string;
//   status: 'Processing' | 'Completed' | 'Cancelled';
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class OrdersService {
//   constructor() {}

//   getOrders(): Order[] {
//     return [
//       { item: 'Raw Black T-Shirt Lineup', date: '20 Mar, 2023', total: '$75.00', status: 'Processing' },
//       { item: 'Classic Monochrome Tees', date: '19 Mar, 2023', total: '$35.00', status: 'Processing' },
//       { item: 'Monochromatic Wardrobe', date: '7 Feb, 2023', total: '$27.00', status: 'Completed' },
//       { item: 'Essential Neutrals', date: '29 Jan, 2023', total: '$22.00', status: 'Completed' },
//       { item: 'UTRANET Black', date: '27 Jan, 2023', total: '$43.00', status: 'Processing' },
//       { item: 'Elegant Ebony Sweatshirts', date: '4 Jan, 2023', total: '$35.00', status: 'Cancelled' },
//       { item: 'Sleek and Cozy Black', date: '28 Dec, 2022', total: '$57.00', status: 'Completed' },
//       { item: 'MOCKUP Black', date: '20 Dec, 2022', total: '$30.00', status: 'Processing' },
//     ];
//   }
// }


// 2
import { Injectable } from '@angular/core';

export interface Order {
  item: string;
  date: string;
  total: string;
  status: 'Processing' | 'Completed' | 'Cancelled';
  imageUrl: string; // New property for images
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  getOrders(): Order[] {
    return [
      { item: 'Raw Black T-Shirt Lineup', date: '20 Mar, 2023', total: '$75.00', status: 'Processing', imageUrl: 'assets/images/raw-black-tshirt.png' },
      { item: 'Classic Monochrome Tees', date: '19 Mar, 2023', total: '$35.00', status: 'Processing', imageUrl: 'assets/images/classic-monochrome.png' },
      { item: 'Monochromatic Wardrobe', date: '7 Feb, 2023', total: '$27.00', status: 'Completed', imageUrl: 'assets/images/monochromatic.png' },
      { item: 'Essential Neutrals', date: '29 Jan, 2023', total: '$22.00', status: 'Completed', imageUrl: 'assets/images/essential-neutrals.png' },
      { item: 'UTRANET Black', date: '27 Jan, 2023', total: '$43.00', status: 'Processing', imageUrl: 'assets/images/utranet-black.png' },
      { item: 'Elegant Ebony Sweatshirts', date: '4 Jan, 2023', total: '$35.00', status: 'Cancelled', imageUrl: 'assets/images/elegant-ebony.png' },
      { item: 'Sleek and Cozy Black', date: '28 Dec, 2022', total: '$57.00', status: 'Completed', imageUrl: 'assets/images/sleek-and-cozy.png' },
      { item: 'MOCKUP Black', date: '20 Dec, 2022', total: '$30.00', status: 'Processing', imageUrl: 'assets/images/mockup-black.png' },
    ];
  }
}
