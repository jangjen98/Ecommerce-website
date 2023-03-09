import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public emailAddress = "info@xxxxx.com";
  public number = "456-56894-895";
  public address = "Düsseldorf, Germany";

  constructor() { }

  ngOnInit(): void {
  }

}
