import { Directive } from '@angular/core';
import { Page } from '@nativescript/core';

@Directive({
	selector: '[hideActionBar]'
})
export class HideActionBarDirective {
	constructor(page: Page) {
		page.actionBarHidden = true;
	}
}