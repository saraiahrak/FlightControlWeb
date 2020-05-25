import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight-service/flight.service';

@Component({
    selector: 'flight-item',
    templateUrl: './flight-item.component.html',
    styleUrls: ['./flight-item.component.css'],
})
export class FlightItemComponent implements OnInit {
    @Input() flight: Flight;
    @Output() deleteFlight: EventEmitter<Flight> = new EventEmitter();

    constructor(private flightService: FlightService) {}

    ngOnInit(): void {}

    onClick(flight: Flight) {
        console.log('delete');
        this.deleteFlight.emit(flight);
    }
}
