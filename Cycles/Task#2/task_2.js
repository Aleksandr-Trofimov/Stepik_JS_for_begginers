/* В этом задании вам нужно вычислить сумму всех четных чисел, встречающихся в ряду от 1 до числа (включительно), передаваемого в нашу функцию (переменная "а"). */
function testWhile(a) {
	var x = 0;
	for (let i = 0; i <= a; i += 2) {
		x += i;
	}
	return x;
}
let example = testWhile(7);
console.log(example);
