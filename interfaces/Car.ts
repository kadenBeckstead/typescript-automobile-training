import { FuelType } from "./Supporting";
import { Vehicle } from "./Vehicle";

export interface iCar extends Vehicle {
    numberOfWheels: number;
    fuelType: FuelType;
}

