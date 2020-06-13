import { Component, OnInit } from '@angular/core';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';

@Component({
  selector: 'page-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.css'],
})
export class TodayPage implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public utils: AppUtils) { }

  ngOnInit() {
  }
}
