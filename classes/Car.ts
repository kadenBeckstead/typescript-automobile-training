import { iCar, Classification, Colors, FuelType } from '../interfaces';

export class Car implements iCar {
    classification: Classification;
    color: Colors;
    numberOfWheels: number;
    fuelType: FuelType;
    constructor(initializer: iCar) {
        this.classification = initializer.classification;
        this.color = initializer.color;
        this.numberOfWheels = initializer.numberOfWheels;
        this.fuelType = initializer.fuelType;
    }
    honkHorn(): void {
        console.log('BEEP BEEP!');
    }
}