import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { HttpService } from '@src/app/services/http.service';
import { CacheService } from '@src/app/services/cache/cache.service.tns';

const API_URI: string = 'https://pokeapi.co/api/v2/';

@Injectable()
export class PokeApiService {

	constructor(private http: HttpService, private cache: CacheService) { }

	getPokemonByNumber(number: number): Observable<any> {
		let pokemonData = this.cache.get(`pokemon_${number}`)
		if (pokemonData) {
			let pokemonData$ = new Observable(
				(observer) => {
					observer.next(JSON.parse(pokemonData));
					observer.complete();
					observer.unsubscribe();
				}
			);
			return pokemonData$;
		} else {
			let httpRequest = this.http.get(`${API_URI}pokemon/${number}`);
			httpRequest.subscribe((res) => {
				try {
					this.cache.put(`pokemon_${number}`, JSON.stringify(res));	
				} catch (err) {
					console.warn(err);
				}
			});
			return httpRequest;
		}
	}

}