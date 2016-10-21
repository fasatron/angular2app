import { Component, Input, OnInit} from '@angular/core';
import { Waypoint }  from '../../shared/waypoint.model';
import { WaypointService }  from '../../shared/waypoint.service';

@Component({
	selector: 'waypoint-list',
	templateUrl: './app/components/waypoint-list/waypoint-list.component.html',
  styleUrls: ['./app/components/waypoint-list/waypoint-list.component.css']
})


export class WaypointListComponent implements OnInit {
	waypoints: Waypoint[];

	constructor(private waypointService: WaypointService) {}

	ngOnInit() {
		this.waypoints = this.waypointService.getWaypoints();
	}

	onWaypointDeleting(waypoint: Waypoint) {
		this.waypointService.deleteWaypoint( waypoint );
	}
}
