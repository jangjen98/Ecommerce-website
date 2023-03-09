import { Component, OnInit } from '@angular/core';
import { LOGIN } from 'src/app/common/config/route.config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public LOGIN = "/" + LOGIN;

  constructor() { }

  ngOnInit(): void {
  }

}
