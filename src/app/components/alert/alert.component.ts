import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from 'src/app/services/flight-service/flight.service';
import { Alert } from 'src/app/models/Alert';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
    @Input() alert: Alert;
    constructor() {}

    ngOnInit(): void {}
}
