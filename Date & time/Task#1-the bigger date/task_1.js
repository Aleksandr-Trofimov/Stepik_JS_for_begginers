/* В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.

Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник". */

function testDateTime(a, b) {
	const weekdayArr = [
		"Воскресенье",
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота",
	];
	const x = new Date(a);
	const y = new Date(b);
	if (+x <= +y) {
		return weekdayArr[y.getDay()];
	} else {
		return weekdayArr[x.getDay()];
	}
}

let result = testDateTime("09 May 1909 07:49", "25 September 1909 04:13");
console.log(result);
