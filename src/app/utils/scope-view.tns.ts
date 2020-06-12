import { Component, Inject, Input } from '@angular/core';
import { Device, platformNames } from 'tns-core-modules/platform';
import { DEVICE } from 'nativescript-angular/platform-providers';

@Component({
    selector: 'ScopeView',
    template: `
<ng-container *ngIf="isValidScope()">
    <ng-content></ng-content>
</ng-container>
`
})
export class ScopeViewComponent {
    @Input('platform') platform!: 'web' | 'mobile' | 'android' | 'ios';

    constructor(@Inject(DEVICE) private device: Device) { }

    isValidScope() {
        return (
            this.platform == 'mobile' ||
            (this.platform == 'android' && this.device.os === platformNames.android) ||
            (this.platform == 'ios' && this.device.os === platformNames.ios)
        );
    }
}