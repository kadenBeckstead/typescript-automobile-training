import { getRand } from "./random";

export const getGreeting = () => {
	const rand = getRand(1,5);

	switch(rand) {
		case 1:
			return 'Howdy folks, this is your captain speaking,';
		case 2:
			return 'Goooood evening ladies and Gentlemen, this is Captain Smith just wanted to let you know';
		case 3:
			return 'CAPTAIN: ...';
		case 4:
			return 'This is Captain Smith from the flight deck,';
		case 5:
			return 'folks,';
		default:
			return '';
	}

}

export const getApology = () => {
	const rand = getRand(1,5);

	switch(rand) {
		case 1:
			return 'hang tight!';
		case 2:
			return 'we should get the all clear any second now';
		case 3:
			return 'thanks for your patience';
		case 4:
			return 'should be any minute now';
		case 5:
			return 'apologies for the delay!';
		default:
			return '';
	}

}