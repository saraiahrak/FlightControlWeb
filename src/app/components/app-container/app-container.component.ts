import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './app-container.component.html',
    styleUrls: ['./app-container.component.css'],
})
export class AppContainerComponent implements OnInit {
    title = 'FlightControlWeb';
    constructor() {}

    ngOnInit(): void {}
}
