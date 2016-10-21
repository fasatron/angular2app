import { Component, OnInit } from '@angular/core';

import { Waypoint } from '../../shared/waypoint.model';
import { IWaypoint } from '../../shared/waypoint.model';
import { WaypointService }  from '../../shared/waypoint.service';

@Component({
  selector: 'waypoint-map',
  templateUrl:  './app/components/waypoint-map/waypoint-map.component.html',
  styleUrls: ['./app/components/waypoint-map/waypoint-map.component.css']
})

export class WaypointMapComponent implements OnInit {
  waypoints: IWaypoint[];
  zoom: number;
  lat: number;
  lng: number;


  constructor(private waypointService: WaypointService) {}

  ngOnInit() {
    this.zoom = 8;

    // initial center position for the map
    this.lat = 51.673858;
    this.lng = 7.815982;
    this.waypoints = this.waypointService.getWaypoints();
  }

   markerDragEnd(m: IWaypoint, $event: any) {          
     this.waypointService.moveWaypoint(m, $event);
   }
}


