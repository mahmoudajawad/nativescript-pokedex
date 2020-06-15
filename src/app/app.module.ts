import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from './utils/app-utils/app-utils';
import { HttpService } from './services/http.service';
import { PokeApiService } from './services/pokeApi.service';

import { XAMLModule } from '@src/app/utils/xaml/xaml.module';
import { HideActionBarDirective } from '@src/app/utils/hideActionBar';
import { PlatformViewComponent } from '@src/app/utils/platform-view';
import { ContainerComponent } from './shared/container/container.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from './pages/today/today.page';
import { RandomPage } from './pages/random/random.page';


let pages = [HomePage, TodayPage, RandomPage];
let directives = [HideActionBarDirective];
let components = [PlatformViewComponent, ContainerComponent]


@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...directives,
    ...components,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    XAMLModule,
  ],
  providers: [
    AppUtils,
    HttpService,
    PokeApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
