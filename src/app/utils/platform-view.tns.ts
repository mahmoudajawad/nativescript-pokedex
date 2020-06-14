import { Component, Inject, Input, TemplateRef, ElementRef, ContentChild } from '@angular/core';
import { Device, platformNames } from 'tns-core-modules/platform';
import { DEVICE } from 'nativescript-angular/platform-providers';

@Component({
    selector: 'PlatformView',
    template: `<ng-template [ngTemplateOutlet]="viewTemplate()"></ng-template>`,
})
export class PlatformViewComponent {
    @Input('verbose') verbose: boolean = false;
    @ContentChild('mobile', { static: true }) mobile: TemplateRef<ElementRef>;
    @ContentChild('android', { static: true }) android: TemplateRef<ElementRef>;
    @ContentChild('ios', { static: true }) ios: TemplateRef<ElementRef>;

    constructor(@Inject(DEVICE) private device: Device) { }

    viewTemplate(): TemplateRef<ElementRef> {
        if (this.verbose == false) {
            return this.mobile;
        } else if (this.verbose == true && this.device.os === platformNames.android) {
            return this.android;
        } else if (this.verbose == true && this.device.os === platformNames.ios) {
            return this.ios;
        }
    }
}