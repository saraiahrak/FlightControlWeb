import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'map',
    styles: ['agm-map { height: 470px; /* height is required */ }'],
    template: `
        <agm-map
            [latitude]="latitude"
            [longitude]="longitude"
            [mapTypeId]="mapType"
        >
        </agm-map>
    `,
})
export class MapComponent implements OnInit {
    latitude: Number = 34.873331;
    longitude: Number = 32.006333;
    mapType = 'roadmap';
    constructor() {}

    ngOnInit(): void {}
}
