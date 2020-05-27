import { TestBed } from '@angular/core/testing';

import { FlightMapService } from './flight-map.service';

describe('FlightMapService', () => {
    let service: FlightMapService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FlightMapService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
