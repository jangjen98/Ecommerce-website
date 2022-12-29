import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { BestSellerComponent } from './pages/home/best-seller/best-seller.component';
import { CategoriesComponent } from './pages/home/categories/categories.component';
import { CardComponent } from './components/card/card.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  ProductsComponent,
  LoginComponent,
  AboutUsComponent,
  NotFoundComponent,
  CartComponent,
  SignUpComponent,
  MyAccountComponent,
  FooterComponent,
  BannerComponent,
  BestSellerComponent,
  CategoriesComponent,
  CardComponent,
  ProductDetailComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
