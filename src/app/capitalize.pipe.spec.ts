import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
    // new CapitalizePipe instance
    const pipe = new CapitalizePipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('capitalize words', () => {
        expect(pipe.transform('test string')).toEqual('Test String');
    });
});
