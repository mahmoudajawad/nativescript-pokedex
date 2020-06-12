import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.css'],
})
export class TodayPage implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit() {
  }
}
