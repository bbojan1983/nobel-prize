import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Prize } from './prize';

@Injectable()

export class NobelPrizesService {

    /**
     * Data location.
     *
     * @type {string}
     */
    private url = 'http://api.nobelprize.org/v1/prize.json';

    /**
     * Local data.
     * Only for test!
     *
     * @type {string}
     */
    // public url = './assets/data.json';

    /**
     * Fetch and normalize data using Prize.normalize().
     *
     * @param http
     * @param prize
     */
    constructor(private http: Http, private prize: Prize) {
        this.http.get(this.url)
            .subscribe(res => this.prize.normalize(res.json().prizes).get());
    }

    /**
     * Get prizes
     *
     * @returns {Array<Object>}
     */
    public getPrizes(): Array<Object> {
        return this.prize.prizes;
    }

    /**
     * Get categories
     *
     * @returns {Array<any>}
     */
    public getCategories(): Array<any> {
        return this.prize.categories;
    }

}
