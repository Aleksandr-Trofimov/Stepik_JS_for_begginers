/* Нужно вычислить и вернуть из функции площадь треугольника. Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах. */

const testMath = (a, b, c) => (1 / 2) * a * b * Math.sin((c * Math.PI) / 180);

let example = testMath(2, 10, 16);
console.log(example);
