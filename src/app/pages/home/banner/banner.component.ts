import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/common/config/route.config';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onLoadServers() {
    this.router.navigate([PRODUCTS]);
  }
}
