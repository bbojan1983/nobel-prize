import { NobelPrizePage } from './app.po';

describe('nobel-prize App', () => {
    let page: NobelPrizePage;

    beforeEach(() => {
        page = new NobelPrizePage();
    });

    it('should display message saying NOBEL PRIZE', () => {
        page.navigateTo();

        expect(page.getParagraphText()).toEqual('NOBEL PRIZE');
    });
});
