import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';
import { PokeApiService } from '@src/app/services/poke-api/poke-api.service';
import { Pokemon } from '@src/app/models/pokemon';

@Component({
	selector: 'page-today',
	templateUrl: './today.page.html',
	styleUrls: ['./today.page.css'],
})
export class TodayPage implements OnInit {

	pokemon$!: Observable<Pokemon>;

	constructor(public utils: AppUtils, private pokeApi: PokeApiService) { }

	ngOnInit() {
		let now = new Date();
		let start = new Date(now.getFullYear(), 0, 0);
		let diff = (now as any) - (start as any);
		let oneDay = 1000 * 60 * 60 * 24;
		let day = Math.floor(diff / oneDay);
		this.pokemon$ = this.pokeApi.getPokemonByNumber(day).pipe(
			map((res) => {
				return this.utils.generatePokemonObject(res);
			})
		);
	}
}
