import { Component, OnInit } from '@angular/core';
import { SIGNIN } from 'src/app/common/config/route.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public SIGNIN = "/" + SIGNIN;

  constructor() { }

  ngOnInit(): void {
  }

}
