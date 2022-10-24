import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id ===id)!;

    this.messageService.add(`HeroService: fetched hero n°${id}`);
    return of(hero);
  } 
}
