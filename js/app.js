const firstContainer = document.getElementById("firstExercise");
const secondContainer = document.getElementById("secondExercise");
const thirdContainer = document.getElementById("thirdExercise");
const fourthContainer = document.getElementById("fourthExercise");
const fifthContainer = document.getElementById("fifthExercise");

function printResults(container, text) {
	container.innerHTML += text;
}

const firstExercise = document.querySelector(".firstExercise");
firstExercise.addEventListener("click", () => {
	let num1 = parseInt(
		window.prompt(
			"Vamos ver cual es el numero mayor, introduce el primer numero"
		)
	);
	let num2 = parseInt(
		window.prompt(
			"Vamos a ver cual es el numero mayor, introduce el segundo numero"
		)
	);
	if (num1 > num2) {
		printResults(
			firstContainer,
			`The larger of ${num1} and  ${num2} is ${num1}`
		);
	} else if (num2 > num1) {
		printResults(
			firstContainer,
			`The larger of ${num1} and  ${num2} is ${num2}`
		);
	} else {
		printResults(
			firstContainer,
			`The larger of ${num1} and  ${num2} are equal`
		);
	}
});

const secondExercise = document.querySelector(".secondExercise");
secondExercise.addEventListener("click", () => {
	let num1 = parseInt(
		window.prompt(
			"Vamos ver cual es el numero mayor, introduce el primer numero"
		)
	);
	let num2 = parseInt(
		window.prompt(
			"Vamos a ver cual es el numero mayor, introduce el segundo numero"
		)
	);
	let num3 = parseInt(
		window.prompt(
			"Vamos a ver cual es el numero mayor, introduce el tercer numero"
		)
	);
	let result = Math.max(num1, num2, num3);
	printResults(
		secondContainer,
		`The larger of ${num1},  ${num2} and ${num3} is ${result}`
	);
});

const thirdExercise = document.querySelector(".thirdExercise");
thirdExercise.addEventListener("click", () => {
	let num1 = parseInt(window.prompt("Escribe un número"));
	if (num1 % 2 === 0) {
		printResults(thirdContainer, `The number ${num1} is divisible by 2`);
	} else {
		printResults(
			thirdContainer,
			`The number ${num1} is not divisible by 2`
		);
	}
});

const fourthExercise = document.querySelector(".fourthExercise");
fourthExercise.addEventListener("click", () => {
	let text = window.prompt("Escribe una frase");
	var numChar = text.length;
	text = text.toUpperCase();
	var char;
	var contador = 0;
	var i;
	for (i = 0; i < numChar; i++) {
		char = text.charAt(i);
		if (char == "A") {
			contador++;
		}
	}
	printResults(fourthContainer, `The letter "a" appears: ${contador} times`);
});

const fifthExercise = document.querySelector(".fifthExercise");
fifthExercise.addEventListener("click", () => {
	var a = (e = i = o = u = space = 0);
	vectorChar = takeText();

	function takeText() {
		var text = window.prompt("escribe un texto cualquiera");
		var splitedText = text.toLowerCase().split("");
		return splitedText;
	}

	for (index = 0; index < vectorChar.length; index++) {
		switch (vectorChar[index]) {
			case "a":
			case "à":
			case "á":
				a++;
				break;
			case "e":
			case "é":
			case "è":
				e++;
				break;
			case "i":
			case "í":
			case "ì":
				i++;
				break;
			case "o":
			case "ó":
			case "ò":
				o++;
				break;
			case "u":
			case "ú":
			case "ù":
				u++;
				break;
			case " ":
				space++;
		}
	}

	totalVowels = a + e + i + o + u;

	printResults(fifthContainer, `<br>Hay ${a} vocales 'a'<br>`);
	printResults(fifthContainer, `Hay ${e} vocales 'e'<br>`);
	printResults(fifthContainer, `Hay ${i} vocales 'i'<br>`);
	printResults(fifthContainer, `Hay ${o} vocales 'o'<br>`);
	printResults(fifthContainer, `Hay ${u} vocales 'u'<br>`);

	printResults(fifthContainer, "<br>");
	printResults(fifthContainer, `Total de vocales: ${totalVowels}`);
	printResults(fifthContainer, "<br>");
	printResults(fifthContainer, `Total de espacios en blanco: ${space}`);
	printResults(fifthContainer, "<br>");
	printResults(
		fifthContainer,
		`Total de carácteres escritos: ${vectorChar.length}`
	);
	printResults(fifthContainer, "<br>");
	printResults(
		fifthContainer,
		`Texto original: <b> ${vectorChar.join("")}</b>`
	);
});

// const fifthExercise = document.querySelector(".fifthExercise");
// fifthExercise.addEventListener("click", () => {
// 	let text = window.prompt("Escribe una frase");
// 	var numChar = text.length;
// 	text = text.toUpperCase();
// 	var char;
// 	var contador = 0;
// 	var i;
// 	for (i = 0; i < numChar; i++) {
// 		char = text.charAt(i);
// 		if (char == "A") {
// 			contador++;
// 		}
// 	}
// 	printResults(fourthContainer, `The letter "a" appears: ${contador} times`);
// });
