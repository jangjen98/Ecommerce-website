import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

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
import { InfoComponent } from './pages/my-account/info/info.component';
import { WishLishComponent } from './pages/my-account/wish-lish/wish-lish.component';
import { FilterSideComponent } from './pages/products/filter-side/filter-side.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { VerticalLineComponent } from './components/vertical-line/vertical-line.component';
import { PicsCollectComponent } from './pages/product-detail/pics-collect/pics-collect.component';
import { ProductContentComponent } from './pages/product-detail/product-content/product-content.component';
import { HrComponent } from './components/hr/hr.component';
import { ReviewPartStarsComponent } from './pages/product-detail/review-part-stars/review-part-stars.component';
import { ReviewPartCommentsComponent } from './pages/product-detail/review-part-comments/review-part-comments.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  InfoComponent,
  WishLishComponent,
  FilterSideComponent,
  ListProductsComponent,
  VerticalLineComponent,
  PicsCollectComponent,
  ProductContentComponent,
  HrComponent,
  ReviewPartStarsComponent,
  ReviewPartCommentsComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
