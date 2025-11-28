const getComputerChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * options.length);
	console.log(randomIndex);

	return options[randomIndex];
};

console.log(getComputerChoice());

const getHumanChoice = () => {
	const userInput = prompt("Choose rock, paper, or scissors: ").toLowerCase();

	if (
		userInput == "rock" ||
		userInput == "paper" ||
		userInput == "scissors"
	) {
		return userInput;
	} else {
		console.log("Invalid choice. Try Again!");
		return getHumanChoice();
	}
};

console.log(getHumanChoice());
