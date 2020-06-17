import { Component, OnInit, Input } from '@angular/core';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';

import { Pokemon, POKEMON_SPRITES } from '@src/app/models/pokemon';


@Component({
	selector: 'app-pokemon-info',
	templateUrl: './pokemon-info.component.html',
	styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {

	POKEMON_SPRITES: Array<string> = POKEMON_SPRITES;

	@Input('pokemon') pokemon!: Pokemon;

	constructor(public utils: AppUtils) { }

	ngOnInit() { }

}
