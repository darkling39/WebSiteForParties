import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TokenInterceptor } from './shared/token.interseptor';
import { OverviewComponent } from './components/overview/overview.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HistoryComponent } from './components/history/history.component';
import { NewOrderPageComponent } from './components/new-order-page/new-order-page.component';
import { OrderCategoriesComponent } from './components/new-order-page/order-categories/order-categories.component';
import { OrderPositionsComponent } from './components/new-order-page/order-positions/order-positions.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductFormPageComponent } from './components/products-page/product-form-page/product-form-page.component';
import { ProductFormComponent } from './components/products-page/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewComponent,
    AnalyticsComponent,
    HistoryComponent,
    NewOrderPageComponent,
    OrderCategoriesComponent,
    OrderPositionsComponent,
    ProductsPageComponent,
    ProductFormPageComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
