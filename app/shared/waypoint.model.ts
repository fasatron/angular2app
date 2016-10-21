export interface IWaypoint {
	lat: number;
	lng: number;
  label?: string;
  draggable: boolean;
}

export class Waypoint implements IWaypoint {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;

  constructor(lat: number, lng: number, label: string, draggable: boolean) {
    this.lat = lat;
    this.lng = lng;
    this.label = label;
    this.draggable = draggable;
  }
}