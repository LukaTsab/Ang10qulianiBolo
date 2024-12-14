import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { DashboardPageComponent } from './admin-dashboard/dashboard-page/dashboard-page.component';
import { ProductsPageComponent } from './admin-dashboard/products-page/products-page.component';
import { OrdersPageComponent } from './admin-dashboard/orders-page/orders-page.component';
import { CustomersPageComponent } from './admin-dashboard/customers-page/customers-page.component';
import { ReviewsPageComponent } from './admin-dashboard/reviews-page/reviews-page.component';
import { SettingsPageComponent } from './admin-dashboard/settings-page/settings-page.component';
import { AddProductPageComponent } from './admin-dashboard/products-page/add-product-page/add-product-page.component';

export const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: 'products/add', component: AddProductPageComponent },
      { path: 'orders', component: OrdersPageComponent },
      { path: 'customers', component: CustomersPageComponent },
      { path: 'reviews', component: ReviewsPageComponent },
      { path: 'settings', component: SettingsPageComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
