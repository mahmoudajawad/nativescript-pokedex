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
	gridElementsRows!: Array<string>;

	constructor(private utils: AppUtils, private cdr: ChangeDetectorRef) { }

	ngOnInit() {
		this.onLayoutChanged(null);
	}

	onLayoutChanged($event) {
		if (this.utils.platform() == 'web' && this.utils.screenWidth() > 640) {
			this.gridLayoutRows = '100 auto auto * auto 100';
			this.gridElementsRows = ['1', '2', '3', '4'];
		} else {
			this.gridLayoutRows = 'auto auto * auto';
			this.gridElementsRows = ['0', '1', '2', '3'];
		}
	}
}
