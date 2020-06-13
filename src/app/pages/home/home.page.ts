import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {
  title = 'nativescript-pokedex';
  gridLayoutRows!: string;

  constructor(private utils: AppUtils, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.onLayoutChanged(null);
  }

  onLayoutChanged($event) {
    if (this.utils.platform() == 'web') {
      if (this.utils.screenWidth() > 640) {
        this.gridLayoutRows = 'auto * auto 100';
      } else {
        this.gridLayoutRows = 'auto * auto';
      }
    } else {
      this.gridLayoutRows = 'auto * auto';
    }
    this.cdr.detectChanges();
  }
}
