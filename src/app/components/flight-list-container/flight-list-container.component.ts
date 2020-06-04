import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    HostListener,
} from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { Observable, of } from 'rxjs';
import { FlightService } from 'src/app/services/flight-service/flight.service';
import { FlightPlan } from 'src/app/models/FlightPlan';
import { map, catchError } from 'rxjs/operators';

@Component({
    selector: 'flight-list-container',
    templateUrl: './flight-list-container.component.html',
    styleUrls: ['./flight-list-container.component.css'],
})
export class FlightListContainerComponent implements OnInit {
    flights$: Observable<Flight[]>;

    dropZoneEntered: boolean = false;
    constructor(private flightService: FlightService) {}

    ngOnInit(): void {
        this.flights$ = this.flightService.getFlights();
    }

    //Dragleave listener
    @HostListener('dragleave', ['$event']) public dragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dropZoneEntered = false;
    }

    //Dragleave listener
    @HostListener('dragenter', ['$event']) public dragEnter(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dropZoneEntered = true;
    }

    async addFlights(files: File[]) {
        try {
            let val = await files[0].stream().getReader().read();
            let flightPlan = JSON.parse(
                new TextDecoder('utf-8').decode(val.value)
            );
            this.flightService
                .postFlightPlan(flightPlan)
                .pipe(
                    map((val) => {
                        console.log(val);
                        return val;
                    }),
                    catchError((err) => {
                        console.log(err);
                        return of(err);
                    })
                )
                .subscribe();
        } catch (e) {
            console.error(e.stack);
            return;
        }

        // let flightPlan: FlightPlan;
        // flightPlan = {
        //     passengers: 5,
        //     initial_location: {
        //         latitude: 35.22,
        //         longitude: 33.33,
        //         date_time: 'datetime',
        //     },
        //     company_name: 'el-al',
        //     segments: [
        //         {
        //             longitude: 33.33,
        //             latitude: 44.44,
        //             timespan_seconds: 400,
        //         },
        //         {
        //             longitude: 33.33,
        //             latitude: 44.44,
        //             timespan_seconds: 400,
        //         },
        //     ],
        // };
        // this.flightService.postFlightPlan(flightPlan).subscribe((flight) => {
        //     this.flights.push(flight);
        // });
        // // this.flightService.addFiles(files);
        this.dropZoneEntered = false;
    }

    setClasses() {
        let classes = {
            is_entered: this.dropZoneEntered,
        };
        return classes;
    }
}
