import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../models/Flight';

@Pipe({
    name: 'flights',
})
export class FlightsPipe implements PipeTransform {
    transform(flights: Flight[], { type }: any): Flight[] {
        if (type) {
            switch (type) {
                case 'all':
                    return flights;
                case 'internal':
                    return flights.filter((flight) => !flight.is_external);
                case 'external':
                    return flights.filter((flight) => flight.is_external);
                default:
                    return flights;
            }
        }
        return flights;
    }
}
