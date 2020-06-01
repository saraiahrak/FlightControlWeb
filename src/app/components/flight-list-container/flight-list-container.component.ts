import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    HostListener,
} from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/services/flight-service/flight.service';

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
        this.flights$ = this.flightService.getFlights(new Date(), true);
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

    //Dragleave listener
    // @HostListener('drop', ['$event']) public dragDrop(evt) {
    //     evt.preventDefault();
    //     evt.stopPropagation();
    //     this.dropZoneEntered = false;
    // }

    addFlights(files: File[]) {
        this.flightService.addFiles(files);
        this.dropZoneEntered = false;
    }

    // onDragLeave(event) {
    //     console.log('leave');
    //     this.dropZoneEntered = false;
    // }

    // onDragEntered(event) {
    //     console.log('entered');
    //     this.dropZoneEntered = true;
    // }

    // onDropEvent(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     console.log('dropped');
    //     this.dropZoneEntered = false;
    // }

    setClasses() {
        let classes = {
            is_entered: this.dropZoneEntered,
        };
        return classes;
    }
}
