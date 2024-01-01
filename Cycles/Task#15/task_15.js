/* Дано число n. Найдите сумму его цифр. */

function testCycle(n) {
	let x = n;
	let result = 0;
	let num = String(n).length;
	for (let i = 1; i <= num; i += 1) {
		result += Math.trunc(x % 10);
		x = Math.trunc(x / 10);
	}
	return result;
}

let example = testCycle(4907);
console.log(example);
