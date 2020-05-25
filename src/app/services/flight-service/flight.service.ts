import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from 'src/app/models/Flight';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root',
})
export class FlightService {
    constructor() {}

    public getFlights(
        relative_to: Date,
        sync_all: boolean = false
    ): Observable<Flight[]> {
        return of(
            [
                {
                    flight_id: 'Aa121',
                    lontitude: 33.244,
                    latitude: 31.12,
                    passengers: 216,
                    company_name: 'El-Al',
                    date_time: '2023-08-25T23:56:21Z',
                    is_external: true,
                },
                {
                    flight_id: 'Aa122',
                    lontitude: 37.244,
                    latitude: 37.12,
                    passengers: 213,
                    company_name: 'Uriah-Air',
                    date_time: '2021-11-25T23:56:21Z',
                    is_external: true,
                },
                {
                    flight_id: 'Aa124',
                    lontitude: 33.244,
                    latitude: 31.12,
                    passengers: 216,
                    company_name: 'El-Al',
                    date_time: '2021-12-25T23:56:21Z',
                    is_external: false,
                },
                {
                    flight_id: 'Aa126',
                    lontitude: 12.111,
                    latitude: 35.666,
                    passengers: 244,
                    company_name: 'Easy-Jet',
                    date_time: '2019-12-24T23:56:21Z',
                    is_external: true,
                },
                {
                    flight_id: 'Aa125',
                    lontitude: 20.12,
                    latitude: 44.56,
                    passengers: 215,
                    company_name: 'Swiss',
                    date_time: '2020-11-25T13:55:21Z',
                    is_external: false,
                },
            ]
                .filter((flight) => sync_all || !flight.is_external)
                .filter((flight) =>
                    moment(flight.date_time).isAfter(moment(relative_to))
                )
        );
    }

    deleteFlight(flight: Flight): Observable<Flight> {
        return;
    }
}
