import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight-service/flight.service';

@Component({
    selector: 'flight-list',
    templateUrl: './flight-list.component.html',
    styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
    @Input() title: string;
    @Input() flights: Flight[];
    @Input() type: string;

    constructor(private flightService: FlightService) {}

    ngOnInit(): void {}

    deleteFlight(flight: Flight) {
        // this.flights.splice(index, 1);
        this.flights = this.flights.filter(
            (t) => t.flight_id !== flight.flight_id
        );
        // this.flightService.deleteFlight(flight).subscribe();
    }
}
