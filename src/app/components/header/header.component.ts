import { Component, OnInit } from '@angular/core';
import {
  ABOUT_US,
  CART,
  HOME,
  LOGIN,
  MY_ACCOUNT,
  NOT_FOUND,
  PRODUCTS,
  SIGNIN,
} from '../../common/config/route.config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public HOME = "/" + HOME;
  public PRODUCTS = "/" + PRODUCTS;
  public CART = "/" + CART;
  public LOGIN = "/" + LOGIN;
  public SIGNIN = "/" + SIGNIN;
  public MY_ACCOUNT = "/" + MY_ACCOUNT;
  public ABOUT_US = "/" + ABOUT_US;
  public NOT_FOUND = "/" + NOT_FOUND;

  constructor() {}

  ngOnInit(): void {}
}
