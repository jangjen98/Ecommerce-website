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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo:'home',
        pathMatch: 'full',
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'cart',
        component: CartComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'signup',
        component: SignUpComponent
      },
      {
        path:'my-account',
        component: MyAccountComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'about-us',
        component: AboutUsComponent
      },
    ]
  },
  {
    path:'**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
