import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

    // selected: Flight;
    constructor(public flightService: FlightService) {}

    ngOnInit(): void {}

    deleteFlight(flight: Flight) {
        if (flight.flight_id === this.flightService.selectedFlight?.flight_id) {
            this.flightService.setSelected(null);
        }
        this.flights = this.flights.filter(
            (t) => t.flight_id !== flight.flight_id
        );
        this.flightService.deleteFlight(flight.flight_id).subscribe();
    }

    clickFlight(flight: Flight) {
        let selected = this.flightService.selectedFlight;
        if (!selected || selected.flight_id !== flight.flight_id) {
            this.flightService.setSelected(flight);
        } else {
            this.flightService.setSelected(null);
        }
    }
}
