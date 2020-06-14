import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XAMLPage, XAMLActionBar, XAMLLabel, XAMLButton, XAMLImage, XAMLStackLayout, XAMLGridLayout } from '@src/app/utils/xaml/components';
import { XAMLRowDirective, XAMLColDirective } from '@src/app/utils/xaml/directives';


@NgModule({
  declarations: [
    XAMLPage,
    XAMLActionBar,
    XAMLLabel,
    XAMLButton,
    XAMLImage,
    XAMLStackLayout,
    XAMLGridLayout,
    XAMLRowDirective,
    XAMLColDirective,
  ],
  imports: [
    RouterModule.forRoot([]),
  ],
  exports: [
    XAMLPage,
    XAMLActionBar,
    XAMLLabel,
    XAMLButton,
    XAMLImage,
    XAMLStackLayout,
    XAMLGridLayout,
    XAMLRowDirective,
    XAMLColDirective,
  ]
})
export class XAMLModule { }
