/* Даны два целых числа k и n. Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных пробелом. Известно, что и k и n больше либо равно 1. */

function testCycle(k, n) {
	let x = "";
	for (let i = 0; i < k; i++) {
		x += ` ${n}`;
	}
	return x;
}
let example = testCycle(6, '_^"^_');
console.log(example);
