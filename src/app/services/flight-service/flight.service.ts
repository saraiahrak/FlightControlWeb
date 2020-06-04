import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Flight } from 'src/app/models/Flight';
import * as moment from 'moment';
import { FlightPlan } from 'src/app/models/FlightPlan';
import { ServerInfo } from 'src/app/models/ServerInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { AlertsService } from '../alerts.service';

const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
@Injectable({
    providedIn: 'root',
})
export class FlightService {
    alert: string;
    flights: BehaviorSubject<Flight[]>;
    selectedFlight: Flight;
    selectedPlan: FlightPlan;

    latitude: Number = 32.0055;
    longitude: Number = 34.8854;

    url: string = 'http://localhost:5402/api';

    constructor(private http: HttpClient, private alertService: AlertsService) {
        this.flights = new BehaviorSubject([]);
    }

    public setSelected(flight?: Flight) {
        this.selectedFlight = flight;
        if (flight) {
            this.getFlightPlanID(flight.flight_id)
                .pipe(
                    tap((p: FlightPlan) => {
                        this.selectedPlan = p;
                        console.log('selected:', this.selectedPlan);
                        this.latitude = this.selectedFlight.latitude;
                        this.longitude = this.selectedFlight.longitude;
                    }),
                    catchError((err) => {
                        this.alertService.addAlert({
                            title: 'Error Occurred',
                            description:
                                'Error finding flight plan for flight ' +
                                flight.flight_id,
                        });

                        return of(err);
                    })
                )
                .subscribe();
        }
    }

    public fetchFlights(relative_to: string, sync_all: boolean = false) {
        type Params = {
            relative_to: string;
            sync_all?: string;
        };

        let params: Params = {
            relative_to: new Date(relative_to).toISOString(),
        };

        console.log(params.relative_to);

        let path = `${this.url}/Flights`;

        if (sync_all) {
            params.sync_all = 'true';
        }

        this.http
            .get<Flight[]>(path, { params })
            .pipe(
                tap((data) => {
                    console.log(data);
                    this.flights.next(data);
                }),
                catchError((error) => {
                    this.alertService.addAlert({
                        title: 'Error Occurred',
                        description: 'Error getting flights ',
                    });
                    return of(error);
                })
            )
            .subscribe();
    }

    public getFlights(): Observable<Flight[]> {
        return this.flights.asObservable();
    }

    public postFlightPlan(plan: FlightPlan): Observable<Flight> {
        let path = `${this.url}/FlightPlan`;
        return this.http.post<Flight>(path, plan, httpOptions);
    }

    public deleteFlight(id: string): Observable<Flight> {
        let path = `${this.url}/Flights/${id}`;
        return this.http.delete<Flight>(path, httpOptions);
    }

    public addFiles(files: File[]) {
        console.log(files);
    }

    public getFlightPlanID(id: string): Observable<FlightPlan> {
        let path = `${this.url}/FlightPlan/${id}`;

        return this.http.get<FlightPlan>(path).pipe(
            tap((plan) => {
                console.log(plan);
                return plan;
            }),
            catchError((error) => {
                console.log(error);
                return of(error);
            })
        );
    }
}
