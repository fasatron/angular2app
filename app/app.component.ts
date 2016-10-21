import { Component } from '@angular/core';
import { Waypoint } from './shared/waypoint.model';
import { IWaypoint } from './shared/waypoint.model';
import { WaypointService } from './shared/waypoint.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ WaypointService ]
})

export class AppComponent {
	waypoints: IWaypoint[];

	constructor() {}

}
