import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/Alert';

@Injectable({
    providedIn: 'root',
})
export class AlertsService {
    private alerts: BehaviorSubject<Alert[]>;
    constructor() {
        this.alerts = new BehaviorSubject([]);
    }

    addAlert(alert: Alert) {
        this.alerts.next([...this.alerts.getValue(), alert]);
        setTimeout(() => {
            const [first, ...alerts] = this.alerts.getValue();
            this.alerts.next(alerts);
        }, 5000);
    }

    getAlerts() {
        return this.alerts.asObservable();
    }
}
