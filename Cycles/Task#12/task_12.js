/* Найдите наибольший общий делитель чисел a и b. */

function testCycle(a, b) {
	let x = null;
	// Если a < b, то меняем их значения местами
	if (a < b) {
		a = b - a;
		b = b - a;
		a += b;
	}
	if (a === b || a % b === 0) {
		x = b;
	}
	// Воспроизводим алгоритм Евклида
	let c = a;
	let d = b;
	while (c % d !== 0) {
		x = c % d;
		c = d;
		d = x;
	}
	return x;
}

let example = testCycle(8, 44);
console.log(example);
