import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortBy' })

/**
 * Sort data.
 */
export class SortPipe implements PipeTransform {

    transform(array: any, args: any, direction?: boolean): any {
        if (direction) {
            // asc
            array.sort((a: any, b: any) => {
                if (a[args] < b[args]) {
                    return -1;
                } else if (a[args] > b[args]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else {
            // desc
            array.sort((a: any, b: any) => {
                if (a[args] > b[args]) {
                    return -1;
                } else if (a[args] < b[args]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }

        return array;
    }

}
