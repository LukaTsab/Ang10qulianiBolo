import { Injectable } from '@angular/core';

export interface Customer {
  name: string;
  email: string;
  shippingAddress: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Customer[] = [
    {
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      shippingAddress: '8642 Yule Street, Arvada CO 80007',
    },
    {
      name: 'Wade Warren',
      email: 'wade.warren@gmail.com',
      shippingAddress: '5331 Rexford Court, Montgomery AL 36116',
    },
    {
      name: 'Brooklyn Simmons',
      email: 'brooklyn.simmons@gmail.com',
      shippingAddress: '2325 Eastridge Circle, Moore OK 73160',
    },
    {
      name: 'Robert Fox',
      email: 'robert.fox@gmail.com',
      shippingAddress: '2436 Naples Avenue, Panama City FL 32405',
    },
    {
      name: 'Dianne Russell',
      email: 'dianne.russell@gmail.com',
      shippingAddress: '6095 Terry Lane, Golden CO 80403',
    },
    {
      name: 'Ralph Edwards',
      email: 'ralph.edwards@gmail.com',
      shippingAddress: '4001 Anderson Road, Nashville TN 37217',
    },
    {
      name: 'Theresa Webb',
      email: 'theresa.webb@gmail.com',
      shippingAddress: '19141 Pine Ridge Circle, Anchorage AK 99516',
    },
    {
      name: 'Arlene McCoy',
      email: 'arlene.mccoy@gmail.com',
      shippingAddress: '2613 Cottonwood Street, Anchorage AK 99508',
    },
  ];

  // Fetch customers
  getCustomers(): Customer[] {
    return this.customers;
  }
}
