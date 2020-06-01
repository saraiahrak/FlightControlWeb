import { Component, OnInit } from '@angular/core';
import { Marker, AgmMarker } from '@agm/core';
import { FlightService } from 'src/app/services/flight-service/flight.service';
import { Flight } from 'src/app/models/Flight';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { FlightsPipe } from 'src/app/pipes/flights.pipe';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
    flights: Flight[];

    latitude: Number;
    longitude: Number;
    mapType = 'roadmap';
    public curicon =
        'https://img.icons8.com/android/24/000000/airplane-take-off.png';
    selectedMarker;
    markers = [];
    constructor(public flightService: FlightService) {
        this.latitude = flightService.latitude;
        this.longitude = flightService.longitude;
        this.setFlights();
        for (let flight of this.flights) {
            this.addMarker(flight.latitude, flight.longitude);
        }
    }

    ngOnInit(): void {}

    addMarker(lat: number, lng: number) {
        this.markers.push({ lat, lng, alpha: 0.4 });
    }

    mapClick(event) {
        this.flightService.setSelected(null);
    }

    selectMarker(event) {
        const { latitude: lat, longitude: lng } = event;
        let flight = this.flights.find(
            ({ latitude, longitude }) => latitude === lat && longitude === lng
        );

        this.flightService.setSelected(flight);
        this.latitude = lat;
        this.longitude = lng;
    }

    setFlights() {
        this.flights = [
            {
                flight_id: 'Aa121',
                longitude: 105.63233,
                latitude: 22.33159,
                passengers: 216,
                company_name: 'El-Al',
                date_time: '2023-08-25T23:56:21Z',
                is_external: true,
            },
            {
                flight_id: 'Aa122',
                longitude: -12.05228,
                latitude: 37.12,
                passengers: 213,
                company_name: 'Uriah-Air',
                date_time: '2021-11-25T23:56:21Z',
                is_external: true,
            },
            {
                flight_id: 'Aa124',
                longitude: -118.859,
                latitude: 48.75606,
                passengers: 216,
                company_name: 'El-Al',
                date_time: '2021-12-25T23:56:21Z',
                is_external: false,
            },
            {
                flight_id: 'Aa125',
                longitude: 26.31618,
                latitude: 12.09407,
                passengers: 215,
                company_name: 'Swiss',
                date_time: '2020-11-25T13:55:21Z',
                is_external: false,
            },
        ];
    }
}
