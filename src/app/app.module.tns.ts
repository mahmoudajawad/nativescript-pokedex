import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from './utils/app-utils/app-utils.tns';
import { HttpService } from './services/http.service';
import { PokeApiService } from './services/pokeApi.service';

import { HideActionBarDirective } from './utils/hideActionBar.tns';
import { PlatformViewComponent } from './utils/platform-view.tns';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from './pages/today/today.page';


let pages = [HomePage, TodayPage];
let directives = [HideActionBarDirective];
let components = [PlatformViewComponent]


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
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AppUtils,
    HttpService,
    PokeApiService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
