import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';
import { HttpService } from '@src/app/services/http.service';
import { PokeApiService } from '@src/app/services/poke-api/poke-api.service';
import { CacheService } from '@src/app/services/cache/cache.service';

import { XAMLModule } from '@src/app/utils/xaml/xaml.module';
import { HideActionBarDirective } from '@src/app/utils/hide-action-bar/hide-action-bar';
import { PlatformViewComponent } from '@src/app/utils/platform-view/platform-view';
import { ContainerComponent } from '@src/app/shared/container/container.component';
import { NavbarMenu } from '@src/app//shared/navbar-menu';
import { PokemonInfoComponent } from '@src/app/shared/pokemon-info/pokemon-info.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from '@src/app/pages/today/today.page';
import { RandomPage } from '@src/app/pages/random/random.page';
import { PokedexPage } from '@src/app/pages/pokedex/pokedex.page';
import { PokemonPage } from '@src/app/pages/pokemon/pokemon.page';




let pages = [HomePage, TodayPage, RandomPage, PokedexPage, PokemonPage];
let directives = [HideActionBarDirective];
let components = [PlatformViewComponent, ContainerComponent, PokemonInfoComponent, NavbarMenu]


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
		CacheService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
