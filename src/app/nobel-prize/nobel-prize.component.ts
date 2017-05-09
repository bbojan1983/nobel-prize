import { Component, Injectable, Input } from '@angular/core';
import { DataService } from '../data.service';
import { NobelPrizesService } from '../nobel-prizes.service';

@Component({
    selector: 'app-nobel-prize',
    templateUrl: './nobel-prize.component.html',
})

@Injectable()

/**
 * NobelPrize component
 */
export class NobelPrizeComponent {

    /**
     * TwoWay binding input name year.
     */
    @Input() filterableYear: string;

    /**
     * TwoWay binding input name category.
     */
    @Input() filterableCategory: String = 'all';

    /**
     * TwoWay binding input name firstname.
     */
    @Input() filterableFirstname: string;

    /**
     * TwoWay binding input name surname.
     */
    @Input() filterableSurname: string;

    /**
     * Default sorting parameters.
     *
     * @type {{name: string; direction: boolean}}
     */
    public sortable = {
        name: 'year', // default sort key
        direction: false, // default is desc
    };

    /**
     * Normalized data.
     *
     * @type {Array}
     */
    public prizes = [];

    /**
     * Extracted categories from data.
     *
     * @type {Array}
     */
    public categories = [];

    /**
     * Inject services to component.
     *
     * @param data
     * @param noblePrizes
     */
    constructor(public data: DataService, private noblePrizes: NobelPrizesService) {
        this.prizes = this.noblePrizes.getPrizes();
        this.categories = this.noblePrizes.getCategories();
    }

    /**
     * Set sort key and direction.
     *
     * @param type
     */
    sortBy(type) {
        if (this.sortable.name === type) {
            this.sortable.direction = ! this.sortable.direction;
        } else {
            this.sortable.name = type;
            this.sortable.direction = false;
        }
    }

    /**
     * Add icon for sort direction.
     *
     * @param type
     * @returns {any}
     */
    isSortBy(type) {
        if (this.sortable.name === type) {
            return this.sortable.direction ? 'fa-sort-asc' : 'fa-sort-desc';
        }

        return 'fa-sort';
    }

    /**
     * Set all filters to default values.
     */
    resetFilters() {
        this.filterableYear = '';
        this.filterableCategory = 'all';
        this.filterableFirstname = '';
        this.filterableSurname = '';
    }

}

