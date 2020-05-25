import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListContainerComponent } from './components/flight-list-container/flight-list-container.component';
import { FlightService } from './services/flight-service/flight.service';
import { FlightsPipe } from './pipes/flights.pipe';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightItemComponent } from './components/flight-item/flight-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';

@NgModule({
    declarations: [
        AppComponent,
        FlightListContainerComponent,
        FlightsPipe,
        FlightListComponent,
        FlightItemComponent,
        NavbarComponent,
        MapComponent,
        FlightDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyANBjaWNBVp4ti-FDGs52f7XFePARhUxDY',
        }),
    ],
    providers: [FlightService],
    bootstrap: [AppComponent],
})
export class AppModule {}
