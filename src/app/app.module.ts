import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';

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
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertsContainerComponent } from './components/alerts-container/alerts-container.component';

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
        FlightDetailComponent,
        DragDropDirective,
        UploadFilesComponent,
        AboutComponent,
        AppContainerComponent,
        AlertComponent,
        AlertsContainerComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyANBjaWNBVp4ti-FDGs52f7XFePARhUxDY',
        }),
    ],
    providers: [
        FlightService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
