import { Injectable } from '@angular/core';
//import { Hero } from './hero.component';
import {HEROES} from './hero.mock'

@Injectable()

export class HeroService {
  getHeroes(){
    return HEROES;
  };
}
