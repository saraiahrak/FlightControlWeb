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
    }

    ngOnInit(): void {}
}
