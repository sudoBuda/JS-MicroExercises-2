const firstContainer = document.getElementById("firstExercise");
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
