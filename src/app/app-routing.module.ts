import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import {
  ABOUT_US,
  CART,
  HOME,
  LOGIN,
  MY_ACCOUNT,
  NOT_FOUND,
  PRODUCT,
  PRODUCTS,
  SIGNIN,
} from './common/config/route.config';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: HOME,
        pathMatch: 'full',
      },
      {
        path: HOME,
        component: HomeComponent,
      },
      {
        path: CART,
        component: CartComponent,
      },
      {
        path: LOGIN,
        component: LoginComponent,
      },
      {
        path: SIGNIN,
        component: SignUpComponent,
      },
      {
        path: MY_ACCOUNT,
        component: MyAccountComponent,
      },
      {
        path: PRODUCTS,
        component: ProductsComponent,
      },
      {
        path: PRODUCT,
        component: ProductDetailComponent,
      },
      {
        path: ABOUT_US,
        component: AboutUsComponent,
      },
    ],
  },
  {
    path: NOT_FOUND,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
