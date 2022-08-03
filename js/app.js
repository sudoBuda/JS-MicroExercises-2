const firstContainer = document.getElementById("firstExercise");
const secondContainer = document.getElementById("secondExercise");
const thirdContainer = document.getElementById("thirdExercise");

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
	let n1 = parseInt(window.prompt("Escribe un número"));
	if (n1 % 2 === 0) {
		printResults(thirdContainer, `The number ${n1} is divisible by 2`);
	} else {
		printResults(thirdContainer, `The number ${n1} is not divisible by 2`);
	}
});
