/* Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по возрастанию. Неизвестно, какое из чисел больше, но известно, что и a и b больше 0. */

function testCycle(a, b) {
	let c = b;
	if (a > b) {
		b = a;
		a = c;
	}
	let x = "";
	for (let i = a; i <= b; i++) {
		x += ` ${i}`;
	}
	return x;
}
let example = testCycle(15, 4);
console.log(example);
