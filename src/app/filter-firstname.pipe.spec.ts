import { FilterFirstnamePipe } from './filter-firstname.pipe';

describe('FilterFirstnamePipe', () => {
    // new FilterFirstnamePipe instance
    const pipe = new FilterFirstnamePipe();
    // temp data
    const data = [
        { firstname: 'John' },
        { firstname: 'Jane' }
    ];

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('filter data based on input value', () => {
        const word = 'Jo';

        expect(pipe.transform(data, word)).toContain(data[0]);
        expect(pipe.transform(data, word)).not.toContain(data[1]);
    });

    it('reset firstname filter', () => {
        const word = '';

        expect(pipe.transform(data, word)).toContain(data[0]);
        expect(pipe.transform(data, word)).toContain(data[1]);
    });
});
