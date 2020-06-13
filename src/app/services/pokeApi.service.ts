import { Injectable } from '@angular/core';

import { HttpService } from '@src/app/services/http.service';
import { Observable } from "rxjs";

const API_URI: string = 'https://pokeapi.co/api/v2/';

@Injectable()
export class PokeApiService {
    
    constructor(private http: HttpService) { }

    getPokemonByNumber(number: number): Observable<any> {
        return this.http.get(`${API_URI}pokemon/${number}`);
    }
}