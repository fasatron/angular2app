import { Component, Output, EventEmitter } from '@angular/core';
import { Waypoint } from '../../shared/waypoint.model';
import { IWaypoint } from '../../shared/waypoint.model';
import { WaypointService } from '../../shared/waypoint.service';

@Component({
  selector: 'waypoint-form',
  templateUrl: './app/components/waypoint-form/waypoint-form.component.html',
  styleUrls: ['./app/components/waypoint-form/waypoint-form.component.css']
})


export class WaypointFormComponent {

  constructor(private waypointServie: WaypointService) {}

  add(label: string): void {
    if (label === '') return;

    this.waypointServie.addWaypoint( {lat:51.673858, lng:7.815982, label: label, draggable:true} );

  }
}
