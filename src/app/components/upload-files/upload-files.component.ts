import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from 'src/app/services/flight-service/flight.service';
import { Segment } from 'src/app/models/Segment';

@Component({
    selector: 'upload-files',
    templateUrl: './upload-files.component.html',
    styleUrls: ['./upload-files.component.css'],
})
export class UploadFilesComponent implements OnInit {
    files: File[] = [];

    @Output() addFlights: EventEmitter<File[]> = new EventEmitter();

    constructor(private flightService: FlightService) {}

    ngOnInit(): void {}

    uploadFile(event) {
        for (let index = 0; index < event.length; index++) {
            const element = event[index];
            if (this.isJSON(element)) {
                this.files.push(element);
            }
        }
        if (this.files.length > 0) {
            this.addFlights.emit(this.files);
        }
    }

    isJSON(file: File) {
        return file.type === 'application/json';
    }

    // deleteAttachment(index) {
    //     this.files.splice(index, 1);
    // }
}
