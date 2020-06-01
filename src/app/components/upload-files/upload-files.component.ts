import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upload-files',
    templateUrl: './upload-files.component.html',
    styleUrls: ['./upload-files.component.css'],
})
export class UploadFilesComponent implements OnInit {
    files: File[] = [];

    @Output() addFlights: EventEmitter<File[]> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    uploadFile(event) {
        for (let index = 0; index < event.length; index++) {
            const element = event[index];
            this.files.push(element.name);
        }
        if (this.files.length > 0) {
            this.addFlights.emit(this.files);
        }
    }
    // deleteAttachment(index) {
    //     this.files.splice(index, 1);
    // }
}
