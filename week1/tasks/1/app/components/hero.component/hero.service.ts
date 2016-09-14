import { Injectable } from '@angular/core';
import { HEROES } from './list_of_heroes';
import { Hero } from './hero-details'


@Injectable()
export class HeroService{
    getHeroes(): Hero[]{
        return HEROES;
    }
}