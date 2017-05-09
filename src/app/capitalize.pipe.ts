import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})

/**
 * Capitalize string
 */
export class CapitalizePipe implements PipeTransform {

    /**
     * Make a string's first character uppercase.
     *
     * @param value
     * @returns {string}
     */
    transform(value: string): string {
        return value ? value.replace(/\b\w/g, symbol => symbol.toLocaleUpperCase()) : value;
    }

}
