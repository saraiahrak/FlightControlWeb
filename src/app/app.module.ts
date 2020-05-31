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
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DragDropDirective } from './directives/drag-drop.directive';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'http://localhost',
    maxFilesize: 50,
    clickable: false,
};

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
    ],
    imports: [
        DropzoneModule,
        BrowserModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyANBjaWNBVp4ti-FDGs52f7XFePARhUxDY',
        }),
    ],
    providers: [
        FlightService,
        { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
