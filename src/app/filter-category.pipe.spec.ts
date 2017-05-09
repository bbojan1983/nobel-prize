import { FilterCategoryPipe } from './filter-category.pipe';

describe('FilterCategoryPipe', () => {
    // new FilterCategoryPipe instance
    const pipe = new FilterCategoryPipe();
    // temp data
    const data = [
        { category: 'physics' },
        { category: 'chemistry' }
    ];

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('filter data based on selected category', () => {
        const category = 'physics';

        expect(pipe.transform(data, category)).toContain(data[0]);
        expect(pipe.transform(data, category)).not.toContain(data[1]);
    });

    it('reset category filter', () => {
        const category = 'all';

        expect(pipe.transform(data, category)).toContain(data[0]);
        expect(pipe.transform(data, category)).toContain(data[1]);
    });
});
