import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { XAMLPage, XAMLPageRouterOutlet, XAMLActionBar, XAMLActionItem, XAMLLabel, XAMLButton, XAMLImage, XAMLScrollView, XAMLStackLayout, XAMLGridLayout } from '@src/app/utils/xaml/components';
import { XAMLRowDirective, XAMLColDirective, NSRouterLinkDirective } from '@src/app/utils/xaml/directives';


let components = [XAMLPage, XAMLPageRouterOutlet, XAMLActionBar, XAMLActionItem, XAMLLabel, XAMLButton, XAMLImage, XAMLScrollView, XAMLStackLayout, XAMLGridLayout];
let directives = [XAMLRowDirective, XAMLColDirective, NSRouterLinkDirective];

@NgModule({
	declarations: [
		...components,
		...directives,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([]),
		NgbCollapseModule,
	],
	exports: [
		...components,
		...directives,
	]
})
export class XAMLModule { }
