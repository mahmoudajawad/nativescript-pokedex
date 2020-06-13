import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XAMLPage, XAMLActionBar, XAMLLabel, XAMLButton, XAMLImage, XAMLStackLayout, XAMLGridLayout } from '@src/app/utils/xaml/components';


@NgModule({
  declarations: [
    XAMLPage,
    XAMLActionBar,
    XAMLLabel,
    XAMLButton,
    XAMLImage,
    XAMLStackLayout,
    XAMLGridLayout,
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
  ]
})
export class XAMLModule { }
