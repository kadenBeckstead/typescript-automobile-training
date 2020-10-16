import { Vehicle } from "./Vehicle";

export interface iPlane extends Vehicle {
    maxAltitudeRating: number,
    instrumentPanelId: string,
    numEngines: number,
}