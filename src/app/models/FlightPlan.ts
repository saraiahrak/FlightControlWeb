import { Location } from 'src/app/models/Location';
import { Segment } from 'src/app/models/Segment';

export class FlightPlan {
    passengers: number;
    company_name: string;
    initial_location: Location;
    segments: Segment[];
}
