import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

@Component({
    selector: 'map',
    styles: ['agm-map { height: 535px; /* height is required */ }'],
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
    latitude: Number = 32.0055;
    longitude: Number = 34.8854;
    mapType = 'roadmap';

    constructor() {}

    ngOnInit(): void {}
}
