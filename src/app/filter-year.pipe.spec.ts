import { FilterYearPipe } from './filter-year.pipe';

describe('FilterYearPipe', () => {
    // new FilterYearPipe instance
    const pipe = new FilterYearPipe();
    // temp data
    const data = [
        { year: '2016' },
        { year: '2017' }
    ];

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('filter data based on typed year', () => {
        const year = '2017';

        expect(pipe.transform(data, year)).toContain(data[1]);
        expect(pipe.transform(data, year)).not.toContain(data[0]);
    });

    it('reset year filter', () => {
        const year = '';

        expect(pipe.transform(data, year)).toContain(data[0]);
        expect(pipe.transform(data, year)).toContain(data[1]);
    });
});
