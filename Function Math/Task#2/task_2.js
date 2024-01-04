/* В этом задании в нашу функцию передаются 4 числа. Вам необходимо вычислить результат деления большего из этих чисел на меньшее, и округлив до ближайшего меньшего целого вернуть из функции. */

function testMath(a, b, c, d) {
	x = Math.max(a, b, c, d) / Math.min(a, b, c, d);
	return Math.floor(x);
}
let example = testMath(1, 4, 8, 7);
console.log(example);
