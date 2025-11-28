let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * options.length);
	// console.log(randomIndex);

	return options[randomIndex];
};

// console.log(getComputerChoice());

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

// console.log(getHumanChoice());

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		return "It's a tie!";
	} else if (
		(humanChoice === "rock" && computerScore === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		console.log(humanScore);

		return `You win! ${humanChoice} beats ${computerChoice}.`;
	} else {
		computerScore++;
		console.log(computerScore);
		return `You lose! ${computerChoice} beats ${humanChoice}.`;
	}
};

let humanChoice = getHumanChoice();
console.log(humanChoice);

let computerChoice = getComputerChoice();
console.log(computerChoice);

console.log(playRound(humanChoice, computerChoice));
