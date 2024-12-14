// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './admin-login.component.html',
//   styleUrl: './admin-login.component.css'
// })
// export class AdminLoginComponent {

// }

// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css'],
//   providers: [AuthService] // Provide the service only for this component
// })
// export class AdminLoginComponent {
//   // Component logic here
// }


//2
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {
//   email = '';
//   password = '';
//   errorMessage = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onLogin(event: Event): void {
//     event.preventDefault();
//     if (this.authService.login(this.email, this.password)) {
//       this.router.navigate(['/dashboard']);
//     } else {
//       this.errorMessage = 'Invalid email or password!';
//     }
//   }
// }

//3
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-admin-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {
//   email = '';
//   password = '';
//   errorMessage = '';
// }


//4

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-admin-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule], // Add CommonModule here
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {
//   email = '';
//   password = '';
//   errorMessage = '';

//   onLogin(event: Event) {
//     event.preventDefault(); // Prevent form from reloading the page
//     if (this.email === 'admin@example.com' && this.password === 'admin') {
//       console.log('Login successful');
//     } else {
//       this.errorMessage = 'Invalid email or password';
//     }
//   }
// }


// 5

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    if (this.authService.login(this.email, this.password)) {
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
