import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {
  title = 'nativescript-pokedex';

  constructor() { }

  ngOnInit() {
  }
}
