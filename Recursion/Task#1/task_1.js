/* Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом. */

function my_function(n) {
	if (n === 1) return 1;
	return my_function(n - 1) + " " + n;
}

let example = my_function(9);
console.log(example);
