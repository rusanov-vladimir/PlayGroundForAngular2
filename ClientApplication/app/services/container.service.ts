﻿import { Injectable } from '@angular/core';
import {HeroesClient, Hero} from "./../autogenerated"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContainerService {
    constructor(private client: HeroesClient) {

    }

    getHeroes(): Promise<Hero[]> {
        return this.client.get()
            .toPromise()
            .then(
                response =>
                response.data as Hero[]
            )
            .catch(this.handleError);
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    // Add new Hero
    private post(hero: Hero): Promise<Hero> {
        return this.client.post(hero)
            .toPromise()
            .then((res: any) => res.data as Hero)
            .catch(this.handleError);

    }

    // Update existing Hero
    private put(hero: Hero) {
        return this.client
            .put(hero.id, hero)
            .toPromise()
            .then(() => hero as Hero)
            .catch(this.handleError);
    }

    delete(hero: Hero) {
        return this.client
            .delete(hero.id)
            .toPromise()
            .catch(this.handleError);
    }

    save(hero: Hero): Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}