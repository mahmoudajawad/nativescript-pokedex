import { Component, Input, ContentChild, ElementRef, TemplateRef } from '@angular/core';

@Component({
	selector: 'PlatformView',
	template: `<ng-container *ngTemplateOutlet="web"></ng-container>`,
})
export class PlatformViewComponent {
	@Input('verbose') verbose: boolean = false;
	@ContentChild('web', { static: true }) web: TemplateRef<ElementRef>;
}