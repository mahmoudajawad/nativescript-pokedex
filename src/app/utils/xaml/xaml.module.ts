import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XAMLPage, XAMLActionBar, XAMLLabel, XAMLButton, XAMLImage, XAMLStackLayout, XAMLGridLayout } from '@src/app/utils/xaml/components';
import { XAMLRowDirective, XAMLColDirective, /*XAMLRowSpanDirective, XAMLColSpanDirective*/ } from '@src/app/utils/xaml/directives';

let components = [XAMLPage, XAMLActionBar, XAMLLabel, XAMLButton, XAMLImage, XAMLStackLayout, XAMLGridLayout];
let directives = [XAMLRowDirective, XAMLColDirective, /*XAMLRowSpanDirective, XAMLColSpanDirective*/];

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
