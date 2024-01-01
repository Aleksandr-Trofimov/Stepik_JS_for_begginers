/* Дано число n (n > 1). Верните из функции n-ное число Фибоначчи */

function testCycle(n) {
	let x = -1;
	let a = 1;
	for (let i = 0; i <= n; i++) {
		x += a;
		a = x - a;
	}
	return Math.abs(x);
}

let example = testCycle(4);
console.log(example);
