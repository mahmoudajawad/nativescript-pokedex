import { Component, Inject, Input, TemplateRef, ElementRef, ContentChild } from '@angular/core';
import { isAndroid, isIOS, platformNames } from '@nativescript/core';

@Component({
	selector: 'PlatformView',
	template: `<ng-template [ngTemplateOutlet]="viewTemplate()"></ng-template>`,
})
export class PlatformViewComponent {
	@Input('verbose') verbose: boolean = false;
	@ContentChild('mobile', { static: true }) mobile: TemplateRef<ElementRef>;
	@ContentChild('android', { static: true }) android: TemplateRef<ElementRef>;
	@ContentChild('ios', { static: true }) ios: TemplateRef<ElementRef>;

	constructor() { }

	viewTemplate(): TemplateRef<ElementRef> {
		if (this.verbose == false) {
			return this.mobile;
		} else if (isAndroid) {
			return this.android;
		} else if (isIOS) {
			return this.ios;
		}
	}
}