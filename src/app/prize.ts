/**
 * Data normalizer
 */
export class Prize {
    /**
     * Extracted categories.
     * Categories is used for filtering data.
     *
     * @type {Array}
     */
    public categories: Array<any> = [];

    /**
     * Normalized data
     *
     * @type {Array}
     */
    public prizes: Array<object> = [];

    /**
     * Normalize results.
     *
     * @param prizes
     * @returns {Prize}
     */
    public normalize(prizes) {
        prizes.forEach(prize => {
            this.addCategory(prize.category);

            prize.laureates.forEach(laureate => {
                this.addPrize(prize, laureate);
            });
        });

        return this;
    }

    /**
     * Return normalized data.
     *
     * @returns {{prizes: Array<Object>, categories: Array<any>}}
     */
    public get() {
        return {
            prizes: this.prizes,
            categories: this.categories
        };
    }

    /**
     * Push category to collection.
     *
     * @param category
     */
    private addCategory(category) {
        if (this.categories.indexOf(category) === -1) {
            this.categories.push(category);
        }
    }

    /**
     * Push normalized data to prizes collection.
     *
     * @param prize
     * @param laureate
     */
    private addPrize(prize, laureate) {
        this.prizes.push({
            year: prize.year,
            category: prize.category,
            firstname: laureate.firstname,
            surname: laureate.surname,
        });
    }
}