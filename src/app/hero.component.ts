import { Component, Input } from '@angular/core';
//import {HeroService } from './hero.service';

@Component({
  //selector: 'hero-selector',
  // template: `
  // <div *ngIf="hero">
  //   <h2>{{hero.name}} details!</h2>
  //   <div><label>id: </label>{{hero.id}}</div>
  //   <div>
  //     <label>name: </label>
  //     <input [(ngModel)]="hero.name" placeholder="name"/>
  //   </div>
  // </div>
  //     `,
  // styleUrls: [''],
  //providers: [HeroService]
})

export class Hero {
  // constructor(private heroService: HeroService) { }
  // heroes:Hero[] = this.heroService.getHeroes()
  id: number;
  name:string;
  bio:string;
}


