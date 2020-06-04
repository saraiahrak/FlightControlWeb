import { Component, OnInit } from '@angular/core';
import { Marker, AgmMarker } from '@agm/core';
import { FlightService } from 'src/app/services/flight-service/flight.service';
import { Flight } from 'src/app/models/Flight';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { FlightsPipe } from 'src/app/pipes/flights.pipe';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
    flights$: Observable<Flight[]>;

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
        this.getFlights();
    }

    ngOnInit(): void {}

    addMarker(lat: number, lng: number) {
        this.markers.push({ lat, lng, alpha: 0.4 });
    }

    mapClick(event) {
        this.flightService.setSelected(null);
        console.log('markers:', this.markers);
    }

    selectMarker(event, flights: Flight[]) {
        const { latitude: lat, longitude: lng } = event;
        let flight = flights.find(
            ({ latitude, longitude }) => latitude === lat && longitude === lng
        );
        this.flightService.setSelected(flight);
        this.latitude = lat;
        this.longitude = lng;
    }

    setMarkers(flights: Flight[]) {
        for (let flight of flights) {
            const { latitude, longitude } = flight;
            this.addMarker(latitude, longitude);
        }
    }

    getFlights() {
        this.flights$ = this.flightService.getFlights().pipe(
            map((flights: Flight[]) => {
                this.markers = [];
                console.log('map:', flights);
                this.setMarkers(flights);
                return flights;
            })
        );
    }
}
