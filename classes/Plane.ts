import { Classification, Colors, iPlane } from "../interfaces";
import { getRand, numberString, print, getApology, getGreeting } from "../utils";

export class Plane implements iPlane {
	classification: Classification;
	color: Colors;
	maxAltitudeRating: number;
	instrumentPanelId: string;
	numEngines: number;

	private positionInQueue: number = 0;

	constructor(initializer: iPlane) {
		this.classification = initializer.classification;
		this.color = initializer.color;
		this.maxAltitudeRating = initializer.maxAltitudeRating;
		this.instrumentPanelId = initializer.instrumentPanelId;
		this.numEngines = initializer.numEngines
	}


	public async flight(): Promise<void> {
		print('Good evening folks, my name is Captain Smith from the flight deck, it looks like there\'s a bit of a line up on the runway, should\'t take too long, i\'ll let you know when I hear more.')
		setTimeout(() => {
			this.positionInQueue = getRand(2, 7);

			const interval = setInterval(() => {
				print(`${getGreeting()} we are currently ${this.positionInQueue}${numberString(this.positionInQueue)} in line for the runway, ${getApology()}`);
				this.positionInQueue--;
				if (this.positionInQueue === 0) {
					setTimeout(() => {
						print('Ladies and Gentlemen, we are cleared for takeoff, please sit back and enjoy the flight. Thanks!')
						clearInterval(interval);
						this.announcements();
					}, 3000)
				}
			}, getRand(4500, 6500))
		}, 10000);
	}

	private async announcements(): Promise<void> {
		print('...');
		let counter = 4;

		const interval = setInterval(() => {
			switch (counter) {
				case 4:
					print(`${getGreeting()} we have now reached our cruising altitude of ${getRand(31000, 38000, true)} feet, feel free to move around the cabin.`);
					break;
				case 3:
					print(`${getGreeting()} in a moment, our flight attendants will be coming around serving drinks, please try to keep the aisles clear for them, thank you!`);
					break;
				case 2:
					print(`${getGreeting()} we are experiencing some turbulence so I am going to turn on the fasten seat-belt light, if you could find your way to your seats that would be much appreciated, thank you!`);
					break;
				case 1:
					print(`${getGreeting()} we are begining our descent into the Salt Lake where winds currently are...... right about 6mph out of the east and it's about 67 degrees farenheit.\n\nOn behalf of your flight crew, we want to thank you for flying air-Bamboo and wish you a wonderful trip, or if this is your home, welcome home!`);
					break;
				case 0:
					clearInterval(interval);
				default:
			}
			counter--;
		}, getRand(5500, 7500))
	}
}