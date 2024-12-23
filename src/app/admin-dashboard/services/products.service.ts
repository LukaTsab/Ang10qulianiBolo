// import { Injectable } from '@angular/core';

// export interface Product {
//   name: string;
//   sku: string;
//   price: number;
//   stockStatus: 'in-stock' | 'out of stock';
//   category: string;
//   availableQuantity: number;
//   description: string;
//   image: string; // Path to product image
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {
//   private products: Product[] = [
//     {
//       name: 'Raw Black T-Shirt Lineup',
//       sku: '47514501',
//       price: 75.00,
//       stockStatus: 'in-stock',
//       category: 'T-shirt, Men',
//       availableQuantity: 10,
//       description: 'Trend',
//       image: 'assets/images/raw-black-tshirt.png',
//     },
//     {
//         name: 'Raw Black T-Shirt Lineup',
//         sku: '47514501',
//         price: 75.00,
//         stockStatus: 'in-stock',
//         category: 'T-shirt, Men',
//         availableQuantity: 10,
//         description: 'Trend',
//         image: 'assets/images/raw-black-tshirt.png',
//       },
//       {
//         name: 'Raw Black T-Shirt Lineup',
//         sku: '47514501',
//         price: 75.00,
//         stockStatus: 'in-stock',
//         category: 'T-shirt, Men',
//         availableQuantity: 10,
//         description: 'Trend',
//         image: 'assets/images/raw-black-tshirt.png',
//       },
//       {
//         name: 'Raw Black T-Shirt Lineup',
//         sku: '47514501',
//         price: 75.00,
//         stockStatus: 'in-stock',
//         category: 'T-shirt, Men',
//         availableQuantity: 10,
//         description: 'Trend',
//         image: 'assets/images/raw-black-tshirt.png',
//       },
//       {
//         name: 'Raw Black T-Shirt Lineup',
//         sku: '47514501',
//         price: 75.00,
//         stockStatus: 'in-stock',
//         category: 'T-shirt, Men',
//         availableQuantity: 10,
//         description: 'Trend',
//         image: 'assets/images/raw-black-tshirt.png',
//       },
    
//     // Add other initial products here...
//   ];

//   getProducts(): Product[] {
//     return [...this.products];
//   }

//   addProduct(product: Product): void {
//     this.products.push(product);
//   }
// }


import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  sku: string;
  price: number;
  stockStatus: 'in-stock' | 'out of stock';
  category: string;
  availableQuantity: number;
  description: string;
  image: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
              name: 'classic-monochrome',
              sku: '32514501',
              price: 48.00,
              stockStatus: 'in-stock',
              category: 'T-shirt, Men',
              availableQuantity: 10,
              description: 'Trend',
              image: 'assets/images/classic-monochrome.png',
            },
            {
                name: 'elegant-ebony',
                sku: '589714501',
                price: 65.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/elegant-ebony.png',
              },
              {
                name: 'Raw Black T-Shirt Lineup',
                sku: '45894501',
                price: 35.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/raw-black-tshirt.png',
              },
              {
                name: 'essential-neutrals',
                sku: '95014501',
                price: 55.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/essential-neutrals.png',
              },
              {
                name: 'mockup-black',
                sku: '68114501',
                price: 75.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/mockup-black.png',
              },
              {
                name: 'monochromatic',
                sku: '29914501',
                price: 30.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/monochromatic.png',
              },
              {
                name: 'sleek-and-cozy',
                sku: '47514501',
                price: 35.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/sleek-and-cozy.png',
              },
              {
                name: 'utranet-black',
                sku: '20014501',
                price: 10.00,
                stockStatus: 'in-stock',
                category: 'T-shirt, Men',
                availableQuantity: 10,
                description: 'Trend',
                image: 'assets/images/utranet-black.png',
              },
  ];

  /**
   * Retrieves all products in the system.
   * @returns A copy of the product list.
   */
  getProducts(): Product[] {
    return [...this.products];
  }

  /**
   * Adds a new product to the product list.
   * @param product - The product to be added.
   */
  addProduct(product: Product): void {
    this.products.push(product);
  }

  /**
   * Filters products based on a search query.
   * @param query - The text to search for.
   * @returns A filtered list of products matching the query.
   */
  searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.sku.includes(query)
    );
  }
}
