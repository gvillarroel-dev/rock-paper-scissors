let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * options.length);

	return options[randomIndex];
};

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

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		return "It's a tie!";
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;

		return `You win! ${humanChoice} beats ${computerChoice}.`;
	} else {
		computerScore++;
		return `You lose! ${computerChoice} beats ${humanChoice}.`;
	}
};

const playGame = () => {
	for (let i = 0; i < 5; i++) {
		let computerChoice = getComputerChoice();
		console.log(computerChoice);

		let humanChoice = getHumanChoice();

		console.log(playRound(humanChoice, computerChoice));
	}
	console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);

	if (humanScore > computerScore) {
		console.log("Congratulations! You are the winner!");
	} else if (computerScore > humanScore) {
		console.log("You Lose! The computer wins!");
	} else {
		console.log("It's a tie overall!");
	}
};

playGame();
