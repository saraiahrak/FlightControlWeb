import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListContainerComponent } from './flight-list-container.component';

describe('FlightListComponent', () => {
    let component: FlightListContainerComponent;
    let fixture: ComponentFixture<FlightListContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlightListContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightListContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
