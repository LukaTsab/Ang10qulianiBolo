// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

// 2
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // Makes this service available globally
// })
// export class AuthService {
//   private users = [
//     { email: 'admin@example.com', password: 'password123' }
//   ];

//   constructor() {}

//   login(email: string, password: string): boolean {
//     return this.users.some(user => user.email === email && user.password === password);
//   }

//   logout(): void {
//     console.log('User logged out');
//   }
// }

// 3
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private users = [
//     { email: 'admin@example.com', password: 'password123' }
//   ];
//   private loggedIn = false;

//   constructor() {}

//   login(email: string, password: string): boolean {
//     const user = this.users.find(u => u.email === email && u.password === password);
//     this.loggedIn = !!user;
//     return this.loggedIn;
//   }

//   isLoggedIn(): boolean {
//     return this.loggedIn;
//   }

//   logout(): void {
//     this.loggedIn = false;
//     console.log('User logged out');
//   }
// }



// 4


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'admin@example.com', password: 'admin' },
  ];
  private loggedIn = false;

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    this.loggedIn = !!user;
    return this.loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}

