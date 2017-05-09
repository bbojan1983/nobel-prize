import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterYear',
    pure: false
})

/**
 * Filter data by year
 */
export class FilterYearPipe implements PipeTransform {

    transform(array: any, args?: string): any {
        // only args with 4 character will be filtered.
        if (args === undefined || args.length < 4 || args.length > 4) { return array; }

        // check if item includes year?
        return array.filter(item => item['year'].includes(args));
    }

}
