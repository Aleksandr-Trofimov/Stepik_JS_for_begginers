/* Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно. Неизвестно, какое из чисел a или b больше. */

function testCycle(a, b) {
	let x = 0;
	for (let i = a > b ? b : a; i <= (a > b ? a : b); i++) {
		x += i ** 2;
	}
	return x;
}
let example = testCycle(9, 3);
console.log(example);
