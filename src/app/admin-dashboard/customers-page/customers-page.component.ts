// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customers-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './customers-page.component.html',
//   styleUrl: './customers-page.component.css'
// })
// export class CustomersPageComponent {

// }


// 2
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// import { CustomersService, Customer } from '../services/customers.service';

// @Component({
//   selector: 'app-customers-page',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './customers-page.component.html',
//   styleUrl: './customers-page.component.css',
// })
// export class CustomersPageComponent implements OnInit {
//   customers: (Customer & { initials: string })[] = [];

//   constructor(private customersService: CustomersService) {}

//   ngOnInit(): void {
//     // Fetch customers from the service and add initials
//     const data = this.customersService.getCustomers();
//     this.customers = data.map((customer) => ({
//       ...customer,
//       initials: this.getInitials(customer.name),
//     }));
//   }

//   // Function to compute initials
//   getInitials(name: string): string {
//     const [firstName, lastName] = name.split(' ');
//     return `${firstName.charAt(0)}${lastName.charAt(lastName.length - 1)}`.toUpperCase();
//   }

//   search(event: Event): void {
//     const query = (event.target as HTMLInputElement).value.toLowerCase();
//     this.filteredCustomers = this.customers.filter((customer) =>
//       customer.name.toLowerCase().includes(query) ||
//       customer.email.toLowerCase().includes(query) ||
//       customer.shippingAddress.toLowerCase().includes(query)
//     );
//   }
// }

// 3
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService, Customer } from '../services/customers.service';

@Component({
  selector: 'app-customers-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.css',
})
export class CustomersPageComponent implements OnInit {
  customers: (Customer & { initials: string })[] = [];
  filteredCustomers: (Customer & { initials: string })[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    const data = this.customersService.getCustomers();
    this.customers = data.map((customer) => ({
      ...customer,
      initials: this.getInitials(customer.name),
    }));
    this.filteredCustomers = [...this.customers]; // Initialize filtered customers
  }

  getInitials(name: string): string {
    const [firstName, lastName] = name.split(' ');
    return `${firstName.charAt(0)}${lastName.charAt(lastName.length - 1)}`.toUpperCase();
  }

  search(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCustomers = this.customers.filter((customer) =>
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.shippingAddress.toLowerCase().includes(query)
    );
  }
}
