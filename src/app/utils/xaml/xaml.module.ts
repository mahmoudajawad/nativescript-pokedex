import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XAMLPage, XAMLPageRouterOutlet, XAMLActionBar, XAMLActionItem, XAMLLabel, XAMLButton, XAMLImage, XAMLStackLayout, XAMLGridLayout } from '@src/app/utils/xaml/components';
import { XAMLRowDirective, XAMLColDirective, NSRouterLinkDirective } from '@src/app/utils/xaml/directives';

let components = [XAMLPage, XAMLPageRouterOutlet, XAMLActionBar, XAMLActionItem, XAMLLabel, XAMLButton, XAMLImage, XAMLStackLayout, XAMLGridLayout];
let directives = [XAMLRowDirective, XAMLColDirective, NSRouterLinkDirective];

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    RouterModule.forRoot([]),
  ],
  exports: [
    ...components,
    ...directives,
  ]
})
export class XAMLModule { }
