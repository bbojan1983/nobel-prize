import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSurname',
    pure: true
})

/**
 * Filter data by surname
 */
export class FilterSurnamePipe implements PipeTransform {

    transform(array: any, args?: string): any {
        if (args === undefined) { return array; }

        // check if item includes surname?
        return array.filter(item => item['surname'].toLowerCase().includes(args.toLowerCase()));
    }

}
