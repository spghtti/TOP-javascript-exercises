function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numbers) {
	let total = 0;
	for (i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

function multiply (numbers) {
	let total = numbers[0];
	for (i = 1; i < numbers.length; i++) {
		total *= numbers[i];
	}
	return total;
}

function power(a, b) {
	let total = 1;
	for (i = 0; i < b; i++) {
		total *= a;
	}
	return total;
}

function factorial(a) {
	let total = a;
	if (a < 2 || a === 0){
		return 1;
	} else {
		for (i = a - 1; i >= 1; i--) {
			total *= i;
		}
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}