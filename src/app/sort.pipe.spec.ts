import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
    // new SortPipe instance
    const pipe = new SortPipe();
    // asc
    const asc = true;
    // desc
    const desc = false;
    // temp data
    const data = [
        { year: 2017 },
        { year: 2016 },
        { year: 2015 }
    ];

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should sort data based on key and direction', () => {
        expect(pipe.transform(data, 'year', asc)).toBe(data);
        expect(pipe.transform(data, 'year', desc)).toBe(data.reverse());
    });
});
