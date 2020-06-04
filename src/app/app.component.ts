import { Component, OnInit } from '@angular/core';
import { Flight } from './models/Flight';
import { FlightService } from './services/flight-service/flight.service';
import { AlertsService } from './services/alerts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'FlightControlWeb';

    constructor(
        private flightService: FlightService,
        private alertService: AlertsService
    ) {}
    ngOnInit() {
        setInterval(() => {
            this.flightService.fetchFlights(new Date().toUTCString(), true);
        }, 5000);
    }
}
