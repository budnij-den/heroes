import { Component } from '@angular/core';
import {HeroService } from './hero.service';
import { Hero } from './hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: ['Hero'],
  providers: [HeroService]
})

export class AppComponent {
  public title = 'tour of heroes';
  public hero:Hero = {
    id: 1,
    name: 'Windstorm',
    bio: 'wind and thunder controller'
  };
  public selectedHero:Hero;
  public heroes:Hero[];
  constructor(private heroService: HeroService) {
  this.heroes = this.heroService.getHeroes();
  console.log(this.heroes)
}

  
  onSelect(f:Hero){
    this.selectedHero = f;
//    console.log(this.selectedHero)
  };
  resetHero(){
    this.selectedHero=null;
  };
}
