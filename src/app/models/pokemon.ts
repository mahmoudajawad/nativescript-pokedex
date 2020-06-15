export const POKEMON_SPRITES: Array<string> = ['frontDefault', 'backDefault', 'frontShiny', 'backShiny', 'frontFemale', 'backFemale', 'frontShinyFemale', 'backShinyFemale'];

export interface Pokemon {
    number: number;
    order: number;
    name: string;
    types: Array<string>;
    height: number;
    baseExperience: number;
    sprites: {
        frontDefault: string;
        backDefault: string;
        frontShiny?: string;
        backShiny?: string;
        frontFemale?: string;
        backFemale?: string;
        frontShinyFemale?: string;
        backShinyFemale?: string;
    };
    stats: Array<{
        id: number;
        name: string;
        effort: number;
        baseStat: number;
    }>;
}