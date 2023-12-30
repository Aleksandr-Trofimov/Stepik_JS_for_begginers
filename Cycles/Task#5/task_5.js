/* Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a. */

function testCycle(a, b) {
	let x = "";
	for (let i = a; i <= b; i++) {
		x += ` ${i}`;
	}
	return x;
}
let example = testCycle(3, 22);
console.log(example);
