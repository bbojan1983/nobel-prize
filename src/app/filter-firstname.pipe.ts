import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterFirstname',
    pure: false
})

/**
 * Filter data by first name
 */
export class FilterFirstnamePipe implements PipeTransform {

    transform(array: any, args?: string): any {
        if (args === undefined) { return array; }

        // check if item includes firstname?
        return array.filter(item => item['firstname'].toLowerCase().includes(args.toLowerCase()));
    }

}
