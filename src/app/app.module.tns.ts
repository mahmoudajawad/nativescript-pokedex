import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { HideActionBarDirective } from './utils/hideActionBar.tns';
import { ScopeViewComponent } from './utils/scope-view.tns';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from './pages/today/today.page';

let pages = [HomePage, TodayPage];
let directives = [HideActionBarDirective];
let components = [ScopeViewComponent]


// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...directives,
    ...components,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
