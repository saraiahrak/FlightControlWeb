import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/Flight';

@Component({
    selector: 'flight-detail',
    templateUrl: './flight-detail.component.html',
    styleUrls: ['./flight-detail.component.css'],
})
export class FlightDetailComponent implements OnInit {
    @Input() flight: Flight;
    constructor() {}

    ngOnInit(): void {}
}
