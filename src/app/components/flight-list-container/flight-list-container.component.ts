import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/services/flight-service/flight.service';

@Component({
    selector: 'flight-list-container',
    templateUrl: './flight-list-container.component.html',
    styleUrls: ['./flight-list-container.component.css'],
})
export class FlightListContainerComponent implements OnInit {
    flights$: Observable<Flight[]>;

    constructor(private flightService: FlightService) {}

    ngOnInit(): void {
        this.flights$ = this.flightService.getFlights(new Date(), true);
    }
}
