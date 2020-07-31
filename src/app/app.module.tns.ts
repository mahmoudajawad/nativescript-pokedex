import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptCommonModule, NativeScriptHttpClientModule, NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from '@src/app/utils/app-utils/app-utils.tns';
import { HttpService } from '@src/app/services/http.service';
import { PokeApiService } from '@src/app/services/poke-api/poke-api.service.tns';
import { CacheService } from '@src/app/services/cache/cache.service.tns';

import { HideActionBarDirective } from '@src/app/utils/hide-action-bar/hide-action-bar.tns';
import { PlatformViewComponent } from '@src/app/utils/platform-view/platform-view.tns';
import { ContainerComponent } from '@src/app/shared/container/container.component';
import { PokemonInfoComponent } from '@src/app/shared/pokemon-info/pokemon-info.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from '@src/app/pages/today/today.page';
import { RandomPage } from '@src/app/pages/random/random.page';
import { PokedexPage } from '@src/app/pages/pokedex/pokedex.page';
import { PokemonPage } from '@src/app/pages/pokemon/pokemon.page';


let pages = [HomePage, TodayPage, RandomPage, PokedexPage, PokemonPage];
let directives = [HideActionBarDirective];
let components = [PlatformViewComponent, ContainerComponent, PokemonInfoComponent]


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
		CacheService,
	],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
