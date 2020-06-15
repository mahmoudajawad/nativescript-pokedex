import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Pokemon } from '@src/app/models/pokemon';

import { HttpService } from '@src/app/services/http.service';

const API_URI: string = 'https://pokeapi.co/api/v2/';

@Injectable()
export class PokeApiService {
    
    constructor(private http: HttpService) { }

    getPokemonByNumber(number: number): Observable<any> {
        return this.http.get(`${API_URI}pokemon/${number}`);
    }

    generatePokemonObject(pokemonData: any): Pokemon {
        let pokemon: Pokemon = {
            number: pokemonData.id,
            order: pokemonData.order,
            name: pokemonData.name,
            types: pokemonData.types.map((type) => { return type.name; }),
            height: pokemonData.height,
            baseExperience: pokemonData.baseExperience,
            sprites: {
                frontDefault: pokemonData.sprites.front_default,
                backDefault: pokemonData.sprites.back_default,
                frontShiny: pokemonData.sprites.front_shiny,
                backShiny: pokemonData.sprites.back_shiny,
                frontFemale: pokemonData.sprites.front_female,
                backFemale: pokemonData.sprites.back_female,
                frontShinyFemale: pokemonData.sprites.front_shiny_female,
                backShinyFemale: pokemonData.sprites.back_shiny_female,
            },
            stats: pokemonData.stats.map((stat) => {
                return {
                    id: stat.stat.url.split('/')[6],
                    name: stat.stat.name,
                    effort: stat.effort,
                    baseStat: stat.base_stat,
                };
            }),
        };
        return pokemon;
    }
}