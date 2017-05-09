import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataService]
        });
    });

    it(`should have a title 'Nobel Prize'`, inject([DataService], (service: DataService) => {
        expect(service.title).toEqual('Nobel Prize');
    }));
});
