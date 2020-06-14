import { Component, OnInit } from '@angular/core';

import { tap, take, map,  } from 'rxjs/operators';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';
import { PokeApiService } from '@src/app/services/pokeApi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.css'],
})
export class TodayPage implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  pokemon$!: Observable<any>;

  constructor(public utils: AppUtils, public pokeApi: PokeApiService) { }

  ngOnInit() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now as any) - (start as any);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    this.pokemon$ = this.pokeApi.getPokemonByNumber(day);
  }

  spritesList(): Array<string> {
    return ['front_default', 'back_default', 'front_shiny', 'back_shiny', 'front_female', 'back_female', 'front_shiny_female', 'back_shiny_female'];
  }
}
