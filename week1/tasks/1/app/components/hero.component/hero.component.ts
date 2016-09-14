import { Component } from '@angular/core';
import { Hero } from './hero-details';
import { TutorialComponent } from '../tutorial.component/tutorial.component';
import { HeroService } from './hero.service'

@Component({
    selector:'hero-component',
    providers:[HeroService],
    template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
        <label>name: </label>
        <input value="{{hero.name}}" placeholder="name">
    </div>

    <p>/////////////</p>
    <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="let heroo of HEROES" (click)="onSelect(heroo)">{{heroo.name}}</li>
              <div *ngIf="selectedHero">
                <h2>{{selectedHero.name}} details!</h2>
                  <div ><label>id: </label>{{selectedHero.id}}</div>
                  <div>
                    <label>name: </label>
                    <input value="{{selectedHero.name}}" placeholder="name"/>
                  </div>
              </div>
        </ul>
    `,

    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]


})
 
 export class HeroComponent{
    hero: Hero = {
        id: 1,
        name: "krasi"
    };
    HEROES: Hero[];
    heroService: HeroService;
    selectedHero: Hero;

    title: string = (new TutorialComponent()).title;
    constructor(){
    this.heroService = new HeroService();
    this.HEROES = this.heroService.getHeroes()
        
    }
     onSelect(heroo: Hero): void{
         this.selectedHero = heroo;

     }

 }

