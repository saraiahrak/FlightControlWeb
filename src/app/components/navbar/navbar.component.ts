import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    @Output() changeMap: EventEmitter<any> = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    onClick() {
        this.changeMap.emit();
    }
}
