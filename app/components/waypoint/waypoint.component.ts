import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Waypoint }  from '../../shared/waypoint.model';

@Component({
  selector: 'waypoint',
  templateUrl: './app/components/waypoint/waypoint.component.html',
  styleUrls: ['./app/components/waypoint/waypoint.component.css']
})

export class WaypointItem {
  @Input() waypoint: Waypoint;
  @Output() deleted = new EventEmitter();

  toggleDone() {
    return 1;
  }

  delete() {
    this.deleted.emit(this.waypoint);
  }

}
