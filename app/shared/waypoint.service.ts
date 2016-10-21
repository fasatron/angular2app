import { Injectable } from '@angular/core';
import { IWaypoint } from './waypoint.model';
import { waypoints } from './waypoint.data';

@Injectable()
export class WaypointService {
  
  getWaypoints(): IWaypoint[] {
    return waypoints;
  }

  addWaypoint(waypoint: IWaypoint): void {
  	waypoints.push( waypoint );
  }

  deleteWaypoint(waypoint: IWaypoint): void {
  	waypoints.splice(waypoints.indexOf(waypoint), 1);
  }

  moveWaypoint(waypoint: IWaypoint, $event: any): void {
  	 waypoint.lat = $event.coords.lat;
     waypoint.lng = $event.coords.lng;
  }
}
