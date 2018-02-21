import { Injectable } from '@angular/core';
import { Hero } from './hero.component';

@Injectable()

export class HeroService {
  getHeroes(){};
}

let HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice", "bio": "very pretty guy" },
  { "id": 12, "name": "Narco", "bio": "dangerous and retard" },
  { "id": 13, "name": "Bombasto", "bio": "bomb lover" },
  { "id": 14, "name": "Celeritas", "bio": "marakasses master" },
  { "id": 15, "name": "Magneta", "bio": "electrifier and Dynama's brother" },
  { "id": 16, "name": "RubberMan", "bio": "flexible like bubble gum" },
  { "id": 17, "name": "Dynama", "bio": "lightning in flesh and Magneta's brother" },
  { "id": 18, "name": "Dr IQ", "bio": "all siences doctor" },
  { "id": 19, "name": "Magma", "bio": "hot chick" },
  { "id": 20, "name": "Tornado", "bio": "big and furious" }
];
