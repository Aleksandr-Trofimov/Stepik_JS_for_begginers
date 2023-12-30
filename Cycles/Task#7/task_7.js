/* Даны числа a и b. Выведите строку с числами от большего числа до меньшего. Известно, что и a и b больше либо равно 1, но неизвестно, какое из них больше. */

function testCycle(a, b) {
	let x = "";
	for (let i = a > b ? a : b; i >= (a > b ? b : a); i--) {
		x += i + " ";
	}
	return x;
}
let example = testCycle(17, 3);
console.log(example);
