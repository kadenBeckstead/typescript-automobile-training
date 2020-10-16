export const getRand = (min: number, max: number, roundToHundred: boolean = false) => {  
	const rand = parseInt((Math.random() * (max - min) + min).toFixed(0)); 
	if (roundToHundred) {
		return Math.round(rand/1000)*1000;
	}
	return rand;
} 