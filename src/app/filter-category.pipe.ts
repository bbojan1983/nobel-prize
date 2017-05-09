import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory',
  pure: false
})

/**
 * Filter data by category
 */
export class FilterCategoryPipe implements PipeTransform {

    transform(array: any, args?: string): any {
        if (args === undefined || args === 'all') { return array; }

        // check if item includes category?
        return array.filter(item => item['category'].includes(args));
    }

}
