import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from 'src/app/models/Flight';
import * as moment from 'moment';
import { FlightPlan } from 'src/app/models/FlightPlan';
import { ServerInfo } from 'src/app/models/ServerInfo';

@Injectable({
    providedIn: 'root',
})
export class FlightService {
    selectedFlight: Flight;
    selectedPlan: FlightPlan;

    latitude: Number = 32.0055;
    longitude: Number = 34.8854;

    constructor() {}

    public setSelected(flight?: Flight) {
        this.selectedFlight = flight;
        this.selectedPlan = this.getFlightPlanID(flight.flight_id);
        this.latitude = this.selectedFlight.latitude;
        this.longitude = this.selectedFlight.longitude;
    }
    public getFlights(
        relative_to: Date,
        sync_all: boolean = false
    ): Observable<Flight[]> {
        // { lat: 47.92393, lng: 78.58339, alpha: 1 },
        return of(
            [
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
                    latitude: 7.92658,
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
                    flight_id: 'Aa126',
                    longitude: -67.03352,
                    latitude: 5.19334,
                    passengers: 244,
                    company_name: 'Easy-Jet',
                    date_time: '2019-12-24T23:56:21Z',
                    is_external: true,
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
            ]
                .filter((flight) => sync_all || !flight.is_external)
                .filter((flight) =>
                    moment(flight.date_time).isAfter(moment(relative_to))
                )
        );
    }

    public postFlightPlan(plan: FlightPlan) {
        console.log(plan);
    }

    public getFlightPlanID(id: string): FlightPlan {
        switch (id) {
            case 'Aa121':
                return {
                    // { lat: 22.33159, lng: 105.63233, alpha: 1 },
                    passengers: 216,
                    company_name: 'El-Al',
                    initial_location: {
                        longitude: 105.63233,
                        latitude: 22.33159,
                        date_time: '2023-08-25T23:56:21Z',
                    },
                    segments: [
                        {
                            longitude: 107.63233,
                            latitude: 25.33159,
                            timespan_seconds: 650,
                        },
                        {
                            longitude: 38.244,
                            latitude: 26.12,
                            timespan_seconds: 400,
                        },
                        {
                            longitude: 40.557,
                            latitude: 28.63,
                            timespan_seconds: 500,
                        },
                    ],
                };
            case 'Aa122':
                // { lat: 7.92658, lng: -12.05228, alpha: 1 },
                return {
                    passengers: 216,
                    company_name: 'El-Al',

                    initial_location: {
                        longitude: -12.05228,
                        latitude: 37.12,
                        date_time: '2021-12-25T23:56:21Z',
                    },
                    segments: [
                        {
                            longitude: -10.05228,
                            latitude: 36.12,
                            timespan_seconds: 650,
                        },
                        {
                            longitude: -8,
                            latitude: 35.77657,
                            timespan_seconds: 400,
                        },
                    ],
                };
            case 'Aa124':
                // { lat: 48.75606, lng: -118.859, alpha: 1 },
                return {
                    passengers: 213,
                    company_name: 'Uriah-Air',
                    initial_location: {
                        longitude: -118.859,
                        latitude: 48.75606,
                        date_time: '2021-11-25T23:56:21Z',
                    },
                    segments: [
                        {
                            longitude: -116.555,
                            latitude: 45.9873,
                            timespan_seconds: 650,
                        },
                        {
                            longitude: -115.444,
                            latitude: 43.4342,
                            timespan_seconds: 400,
                        },
                        {
                            longitude: -113.8744,
                            latitude: 40.98342,
                            timespan_seconds: 400,
                        },
                    ],
                };
            case 'Aa126':
                // { lat: 5.19334, lng: -67.03352, alpha: 1 },
                return {
                    passengers: 213,
                    company_name: 'Uriah-Air',
                    initial_location: {
                        longitude: -67.03352,
                        latitude: 5.19334,
                        date_time: '2021-11-25T23:56:21Z',
                    },
                    segments: [
                        {
                            longitude: -66,
                            latitude: 6.897,
                            timespan_seconds: 650,
                        },
                        {
                            longitude: -64.9287,
                            latitude: 8.2819,
                            timespan_seconds: 400,
                        },
                        {
                            longitude: -61.287,
                            latitude: 10.9879,
                            timespan_seconds: 400,
                        },
                    ],
                };
            case 'Aa125':
                // { lat: 12.09407, lng: 26.31618, alpha: 1 },
                return {
                    passengers: 213,
                    company_name: 'Uriah-Air',
                    initial_location: {
                        longitude: 26.31618,
                        latitude: 12.09407,
                        date_time: '2021-11-25T23:56:21Z',
                    },
                    segments: [
                        {
                            longitude: 23.987,
                            latitude: 14.879,
                            timespan_seconds: 650,
                        },
                        {
                            longitude: 27.989,
                            latitude: 13.9879,
                            timespan_seconds: 400,
                        },
                        {
                            longitude: 29.89379,
                            latitude: 15.938729,
                            timespan_seconds: 400,
                        },
                    ],
                };
            default:
                return null;
        }
    }

    public getServers() {}

    public postServer(server: ServerInfo) {}

    public deleteServer(server: ServerInfo) {}

    // deleteFlight(flight: Flight): Observable<Flight> {
    //     return;
    // }
}
