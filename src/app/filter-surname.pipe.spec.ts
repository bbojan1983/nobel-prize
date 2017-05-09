import { FilterSurnamePipe } from './filter-surname.pipe';

describe('FilterSurnamePipe', () => {
    // new FilterSurnamePipe instance
    const pipe = new FilterSurnamePipe();
    // temp data
    const data = [
        { surname: 'Sauvage' },
        { surname: 'Campbell' }
    ];

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('filter data based on input value', () => {
        const word = 'Campbell';

        expect(pipe.transform(data, word)).toContain(data[1]);
        expect(pipe.transform(data, word)).not.toContain(data[0]);
    });

    it('reset surname filter', () => {
        const word = '';

        expect(pipe.transform(data, word)).toContain(data[0]);
        expect(pipe.transform(data, word)).toContain(data[1]);
    });
});
