import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthGuard } from './guards/auth.guard';
import { OverviewComponent } from './components/overview/overview.component';
import { HistoryComponent } from './components/history/history.component';
import { NewOrderPageComponent } from './components/new-order-page/new-order-page.component';
import { OrderCategoriesComponent } from './components/new-order-page/order-categories/order-categories.component';
import { OrderPositionsComponent } from './components/new-order-page/order-positions/order-positions.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
// import { ProductFormPageComponent } from './components/products-page/product-form-page/product-form-page.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'history', component: HistoryComponent },
      {
        path: 'order',
        component: NewOrderPageComponent,
        children: [
          { path: '', component: OrderCategoriesComponent },
          { path: ':id', component: OrderPositionsComponent },
        ],
      },
      { path: 'categories', component: ProductsPageComponent },
      // { path: 'categories/new', component: ProductFormPageComponent },
      // { path: 'categories/:id', component: ProductFormPageComponent },
      { path: 'analytics', component: AnalyticsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
