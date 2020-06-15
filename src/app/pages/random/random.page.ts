import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';
import { PokeApiService } from '@src/app/services/pokeApi.service';
import { Pokemon, POKEMON_SPRITES } from '@src/app/models/pokemon';

@Component({
  selector: 'page-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.css'],
})
export class RandomPage implements OnInit {

  POKEMON_SPRITES: Array<string> = POKEMON_SPRITES;
  isLoading: boolean = true;
  pokemon$!: Observable<Pokemon>;

  constructor(public utils: AppUtils, private pokeApi: PokeApiService) { }

  ngOnInit() {
    this.getRandomPokemon();
  }

  getRandomPokemon(): void {
    this.isLoading = true;
    this.pokemon$ = this.pokeApi.getPokemonByNumber(Math.floor(Math.random() * 1000)).pipe(
      tap(() => {
        this.isLoading = false;
      }),
      map((res) => {
        return this.pokeApi.generatePokemonObject(res);
      })
    );
  }
}
