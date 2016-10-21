import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { WaypointListComponent }  from './components/waypoint-list/waypoint-list.component';
import { WaypointItem }  from './components/waypoint/waypoint.component';
import { WaypointFormComponent }  from './components/waypoint-form/waypoint-form.component';
import { WaypointMapComponent }  from './components/waypoint-map/waypoint-map.component';

@NgModule({
  imports: [ BrowserModule,     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGxcg1bjrFrpFzmh_Wzd4cv7Uqh0O7aus'
    })],
  declarations: [ AppComponent, WaypointListComponent, WaypointItem, WaypointFormComponent, WaypointMapComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
