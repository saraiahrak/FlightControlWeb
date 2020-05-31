import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'upload-files',
    templateUrl: './upload-files.component.html',
    styleUrls: ['./upload-files.component.css'],
})
export class UploadFilesComponent implements OnInit {
    files: File[] = [];

    constructor() {}

    ngOnInit(): void {}

    uploadFile(event) {
        for (let index = 0; index < event.length; index++) {
            const element = event[index];
            this.files.push(element.name);
        }
    }
    deleteAttachment(index) {
        this.files.splice(index, 1);
    }
}
