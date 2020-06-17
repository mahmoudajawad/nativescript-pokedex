import { Pokemon } from '@src/app/models/pokemon';

export function debugLog(...msg: Array<any>): void {
	console.log(...msg);
}

export function camelCaseToSpaced(camelCase: string): string {
	if (!camelCase) return '';
	return camelCase.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

export function kebabCaseToSpaced(kebabCase: string): string {
	if (!kebabCase) return '';
	return kebabCase.replace(/-/g, ' ').toLowerCase();
}

export function generatePokemonObject(pokemonData: any): Pokemon {
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