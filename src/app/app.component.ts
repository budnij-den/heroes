import { Component } from '@angular/core';
import { Hero } from './hero.component';

//  class Hero {
//   id: number;
//   name:string;
//   bio:string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: ['Hero']
})

export class AppComponent {
  public title = 'tour of heroes';
  public hero:Hero = {
    id: 1,
    name: 'Windstorm',
    bio: 'wind and thunder controller'
  };
  public selectedHero:Hero;
  public heroes = getHeroes();
  onSelect(f:Hero){
    this.selectedHero = f;
//    console.log(this.selectedHero)
  };
  resetHero(){
    this.selectedHero=null;
  };
}

// let HEROES: Hero[] = [
//   { "id": 11, "name": "Mr. Nice", "bio": "very pretty guy" },
//   { "id": 12, "name": "Narco", "bio": "dangerous and retard" },
//   { "id": 13, "name": "Bombasto", "bio": "bomb lover" },
//   { "id": 14, "name": "Celeritas", "bio": "marakasses master" },
//   { "id": 15, "name": "Magneta", "bio": "electrifier and Dynama's brother" },
//   { "id": 16, "name": "RubberMan", "bio": "flexible like bubble gum" },
//   { "id": 17, "name": "Dynama", "bio": "lightning in flesh and Magneta's brother" },
//   { "id": 18, "name": "Dr IQ", "bio": "all siences doctor" },
//   { "id": 19, "name": "Magma", "bio": "hot chick" },
//   { "id": 20, "name": "Tornado", "bio": "big and furious" }
// ];
