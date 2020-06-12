import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { XAMLModule } from '@src/app/utils/xaml/xaml.module';
import { HideActionBarDirective } from './utils/hideActionBar';
import { ScopeViewComponent } from './utils/scope-view';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from './pages/today/today.page';

let pages = [HomePage, TodayPage];
let directives = [HideActionBarDirective];
let components = [ScopeViewComponent]


@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...directives,
    ...components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    XAMLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
