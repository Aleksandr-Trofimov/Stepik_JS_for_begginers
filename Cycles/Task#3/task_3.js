/* Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат. */
function testCycle(n) {
	let x = 0;
	for (let i = 0; i <= n; i++) {
		x += i;
	}
	return x;
}
let example = testCycle(8);
console.log(example);
