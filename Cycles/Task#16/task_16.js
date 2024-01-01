/* Дано положительное число n. Переведите его в двоичную систему счисления. */

function testCycle(n) {
	let x = "";
	let num = n;
	for (let i = 0; i <= n; i += 1) {
		x += num % 2;
		num = Math.trunc(num / 2);
		if (num === 0) {
			break;
		}
	}
	x = x.split("").reverse().join("");
	return x;
}

let example = testCycle(49);
console.log(example);
