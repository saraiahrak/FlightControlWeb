import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight-service/flight.service';

@Component({
    selector: 'flight-details',
    templateUrl: './flight-details.component.html',
    styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
    flight: Flight | null;
    constructor(public flightService: FlightService) {
        this.flight = flightService.selectedFlight;
        // this.flight = {
        //     flight_id: 'Aa121',
        //     lontitude: 33.244,
        //     latitude: 31.12,
        //     passengers: 216,
        //     company_name: 'El-Al',
        //     date_time: '2023-08-25T23:56:21Z',
        //     is_external: true,
        // };
    }

    ngOnInit(): void {}
}
