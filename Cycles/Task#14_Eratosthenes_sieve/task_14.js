/* Дано число n (n > 1). Выведите строку, состоящую из простых чисел, меньших n. Воспользуйтесь решетом Эратосфена. Единицу не считаем простым числом. */

function testCycle(n) {
	let x = n;
	let arr = [];
	// Набиваем массив числами от 2 до n
	for (let i = 0; i < x; i += 1) {
		arr.push(i);
	}
	// Осуществляю решето Эратосфена
	// Помечаем каждый элемент, являющимся суммой простых чисел от j + j вплоть до числа n c шагом j как false.
	for (let j = 2; j < n; j += 1) {
		for (let k = 2 * j; k <= n; k += j) {
			if (Boolean(arr[j]) === true) {
				arr[k] = false;
			}
		}
	}
	// Фильтруем получившийся массив и удаляем из него все элементы со значением false.
	let resultArr = arr.filter((number) => number !== false);
	// Так как 0 и 1 в массиве не являются простыми, то удаляем из искомого массива и первые два элемента: 0 и 1
	resultArr = resultArr.slice(2);
	// Для крассивого вывода преобразовываем массив в строку
	let result = resultArr.join(" ");
	return result;
}

let example = testCycle(11);
console.log(example);
