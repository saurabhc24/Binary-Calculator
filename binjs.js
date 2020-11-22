// logic section

function converToBinary(decimal) {
	let binary = '';
	while (decimal > 0) {
		binary = binary + (decimal % 2);
		decimal = Math.floor((decimal /= 2));
	}
	binary = reverseString(binary);
	return binary;
}
function reverseString(str) {
	let reversed = str
		.split('')
		.reverse()
		.join('');
	return reversed;
}
function converToDecimal(binary) {
	binary = binary.toString();
	let binaryArr = binary.split('');
	let decimal = 0;
	let counter = binaryArr.length - 1;
	binaryArr.forEach(e => {
		decimal += e * Math.pow(2, counter);
		counter--;
	});
	return decimal;
}

//html

const btns = document.querySelectorAll('#btns button');
const res = document.querySelector('.display');
let operation = '';
btns.forEach(btn =>
	btn.addEventListener('click', () => {
		switch (btn.textContent) {
			case '=':
				calculate();
				break;
			case 'C':
				clear();
				break;
			case '+':
				operation = '+';
				res.innerHTML += btn.textContent;
				break;
			case '-':
				operation = '-';
				res.innerHTML += btn.textContent;
				break;
			case '*':
				operation = '*';
				res.innerHTML += btn.textContent;
				break;
			case '/':
				operation = '/';
				res.innerHTML += btn.textContent;
				break;
			default:
				res.innerHTML += btn.textContent;
		}
	})
);
function clear() {
	res.innerHTML = '';
}
function calculate() {
	let toCalc = res.textContent.toString();
	let firstnum;
	let Secondnum;
	let result;
	console.log(toCalc);
	if (operation !== '') {
		toCalc = toCalc.split(operation);
		firstnum = converToDecimal(toCalc[0]);
		Secondnum = converToDecimal(toCalc[1]);
	}

	switch (operation) {
		case '+':
			result = firstnum + Secondnum;
			break;
		case '-':
			result = firstnum - Secondnum;
			break;
		case '*':
			result = firstnum * Secondnum;
			break;
		case '/':
			result = firstnum / Secondnum;
			break;
	}
	res.textContent = converToBinary(result);
}