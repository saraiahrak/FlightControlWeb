import { Component, OnInit } from '@angular/core';
import { Marker, AgmMarker } from '@agm/core';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
    latitude: Number = 32.0055;
    longitude: Number = 34.8854;
    mapType = 'roadmap';
    public curicon =
        'https://img.icons8.com/android/24/000000/airplane-take-off.png';
    selectedMarker;
    markers = [
        // These are all just random coordinates from https://www.random.org/geographic-coordinates/
        { lat: 22.33159, lng: 105.63233, alpha: 1 },
        { lat: 7.92658, lng: -12.05228, alpha: 1 },
        { lat: 48.75606, lng: -118.859, alpha: 1 },
        { lat: 5.19334, lng: -67.03352, alpha: 1 },
        { lat: 12.09407, lng: 26.31618, alpha: 1 },
        { lat: 47.92393, lng: 78.58339, alpha: 1 },
    ];
    constructor() {}

    ngOnInit(): void {}

    addMarker(lat: number, lng: number) {
        this.markers.push({ lat, lng, alpha: 0.4 });
    }

    selectMarker(event) {
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude,
        };
    }
}
