import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';

import { Observable, combineLatest } from 'rxjs';

import { PokeApiService } from '@src/app/services/poke-api/poke-api.service';
import { AppUtils } from '@src/app/utils/app-utils/app-utils';
import { Pokemon } from '@src/app/models/pokemon';


@Component({
	selector: 'page-pokedex',
	templateUrl: './pokedex.page.html',
	styleUrls: ['./pokedex.page.css'],
})
export class PokedexPage implements OnInit {

	isLoading: boolean = false;
	pokemons: {
		[key: number]: Pokemon;
	} = {};
	get pokemonsList(): Array<Pokemon> {
		return Object.values(this.pokemons);
	}
	pageSize: number = 15;

	@ViewChild('PokemonsStack', { static: true }) PokemonsStack: ElementRef;
	lastItemY!: number;

	constructor(public utils: AppUtils, private pokeApi: PokeApiService) { }

	ngOnInit() {
		this.getPokemons();
	}

	getPokemons() {
		this.isLoading = true;
		let padding: number = Object.keys(this.pokemons).length + 1;
		let pokemons$: Array<Observable<Pokemon>> = Array(this.pageSize).fill(undefined).map((n, i) => {
			let pokemon$: Observable<Pokemon> = new Observable(
				(observer) => {
					let pokemonNumber = i + padding;
					this.pokeApi.getPokemonByNumber(pokemonNumber).subscribe((res) => {
						// this.pokemons[pokemonNumber] = this.utils.generatePokemonObject(res);
						observer.next(this.utils.generatePokemonObject(res));
						observer.complete();
						observer.unsubscribe();
					});
				}
			);
			return pokemon$;
		});
		combineLatest(pokemons$).subscribe({
			next: (res) => {
				for (let pokemon of res) {
					this.pokemons[pokemon.number] = pokemon;
				}
			},
			complete: () => { this.isLoading = false; }
		});
	}

	onScroll($event) {
		if (this.isLoading) return;
		let length = this.PokemonsStack.nativeElement.getChildrenCount();
		let lastItem = this.PokemonsStack.nativeElement.getChildAt(length - 1);
		let lastItemY = lastItem.getLocationRelativeTo(this.PokemonsStack.nativeElement).y;

		let scrollView = $event.object;
		let verticalOffset = scrollView.getActualSize().height + scrollView.verticalOffset;

		if (verticalOffset >= lastItemY) {
			this.getPokemons();
		}
	}

}
