/* Дано число n (n > 0). Верните из функции значение двойного факториала: n!!=n∗(n−2)∗(n−4)∗...∗2 (или 1, в зависимости от четности n).

Пример:
для n = 5:
n!!=5∗3∗1=15,
для n = 6: 
n!!=6∗4∗2=48  */

function testCycle(n) {
	let x = 1;
	for (let i = n % 2 === 0 ? 2 : 1; i <= n; i += 2) {
		x *= i;
	}
	return x;
}
let example = testCycle(6);
console.log(example);
