import { Car, Plane } from './classes';
import { Colors } from './interfaces';

const kadensCar = new Car({
	classification: {
		year: '2014',
		make: 'Jeep',
		model: 'Trailhawk'
	},
	color: Colors.Gray,
	numberOfWheels: 4,
	fuelType: 'Gasoline'
});

const b747: Plane = new Plane({
    classification: {
        year: '2019',
        make: 'Boeing',
        model: '747'
    },
    color: Colors.Silver,
    maxAltitudeRating: 45100,
    instrumentPanelId: '123_ABC',
    numEngines: 4
});

const run = () => {
	kadensCar.honkHorn();
	// b747.flight();
}


run();