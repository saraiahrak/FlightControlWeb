import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts.service';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/models/Alert';

@Component({
    selector: 'alerts-container',
    templateUrl: './alerts-container.component.html',
    styleUrls: ['./alerts-container.component.css'],
})
export class AlertsContainerComponent implements OnInit {
    alerts$: Observable<Alert[]>;
    constructor(private alertService: AlertsService) {}

    ngOnInit(): void {
        this.alerts$ = this.alertService.getAlerts();
    }
}
