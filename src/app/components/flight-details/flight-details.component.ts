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

    public endTime() {
        let t = new Date(
            this.flightService.selectedPlan.initial_location.date_time
        );
        for (let seg of this.flightService.selectedPlan.segments) {
            t.setSeconds(t.getSeconds() + seg.timespan_seconds);
        }

        return t.toISOString;
    }

    public startTime() {
        return this.flightService.selectedPlan.initial_location.date_time;
    }

    ngOnInit(): void {}
}
