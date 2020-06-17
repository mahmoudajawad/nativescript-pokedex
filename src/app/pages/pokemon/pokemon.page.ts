import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '@src/app/models/pokemon';
import { PokeApiService } from '@src/app/services/poke-api/poke-api.service';
import { AppUtils } from '@src/app/utils/app-utils/app-utils';


@Component({
	selector: 'page-pokemon',
	templateUrl: './pokemon.page.html',
	styleUrls: ['./pokemon.page.css'],
})
export class PokemonPage implements OnInit {

	pokemon$!: Observable<Pokemon>;

	constructor(private route: ActivatedRoute, private pokeApi: PokeApiService, private utils: AppUtils) { }

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.pokemon$ = this.pokeApi.getPokemonByNumber(params.number).pipe(
				map((res) => {
					return this.utils.generatePokemonObject(res);
				})
			);
		})
	}
}
