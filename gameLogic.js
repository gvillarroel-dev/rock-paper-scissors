let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector(".game__button--reset");
const userChoiceDiv = document.querySelector(".game__choice--user");
const computerChoiceDiv = document.querySelector(".game__choice--computer");
const winnerText = document.querySelector(".game__winner");
const wonValue = document.querySelector(".game__stat-value--won");
const lostValue = document.querySelector(".game__stat-value--lost");
const roundValue = document.querySelector(".game__stat-value--round");
const sectionChoices = document.querySelector(".game__choices");

const getComputerChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * options.length);

	return options[randomIndex];
};

const getHumanChoice = (choice) => {
	return choice;
};

const updateChoiceDisplay = (humanChoice, computerChoice) => {
	const userImg = userChoiceDiv.querySelector(".game__choice-image");
	userImg.src = `./assets/images/${humanChoice}.png`;
	userImg.alt = `Player's choice: ${humanChoice}`;

	const computerImg = computerChoiceDiv.querySelector(".game__choice-image");
	computerImg.src = `./assets/images/${computerChoice}.png`;
	computerImg.alt = `Computer's choice: ${computerChoice}`;
};

const updateStats = () => {
	wonValue.textContent = humanScore;
	lostValue.textContent = computerScore;
	roundValue.textContent = currentRound;
};

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		winnerText.textContent = "It's a tie";
		return "tie";
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		winnerText.textContent = "You Won";
		return "human";
	} else {
		computerScore++;
		winnerText.textContent = "Computer won";
		return "computer";
	}
};

const checkGameOver = () => {
	const maxRounds = 5;

	if (currentRound >= maxRounds) {
		if (humanScore > computerScore) {
			winnerText.textContent = "You Won the Game!";
		} else if (computerScore > humanScore) {
			winnerText.textContent = "Computer Won the Game!";
		} else {
			winnerText.textContent = "Game Tied!";
		}

		showResetButton();
		return true;
	}
	return false;
};

const createButton = (id, className, imgSrc, imgAlt) => {
	const button = document.createElement("button");
	button.id = id;
	button.className = className;

	const img = document.createElement("img");
	img.src = imgSrc;
	img.alt = imgAlt;
	img.className = "game__button-image";

	button.appendChild(img);
	return button;
};

const showResetButton = () => {
	sectionChoices.textContent = "";

	const resetButton = document.createElement("button");
	resetButton.className = "game__button--reset";
	resetButton.id = "resetBtn";
	resetButton.textContent = "RESET GAME";
	resetButton.addEventListener("click", resetGame);

	sectionChoices.appendChild(resetButton);
};

showGameButtons = () => {
	sectionChoices.textContent = "";

	const rock = createButton(
		"rock",
		"game__button game__button--rock",
		"./assets/images/rock.png",
		"Rock"
	);

	rock.addEventListener("click", () => playGame("rock"));

	const paper = createButton(
		"paper",
		"game__button game__button--paper",
		"./assets/images/paper.png",
		"Paper"
	);

	paper.addEventListener("click", () => playGame("paper"));

	const scissors = createButton(
		"scissors",
		"game__button game__button--scissors",
		"./assets/images/scissors.png",
		"Scissors"
	);

	scissors.addEventListener("click", () => playGame("scissors"));

	sectionChoices.appendChild(rock);
	sectionChoices.appendChild(paper);
	sectionChoices.appendChild(scissors);
};

const resetGame = () => {
	humanScore = 0;
	computerScore = 0;
	currentRound = 0;
	winnerText.textContent = "Choose your play!";

	updateStats();

	const userImg = userChoiceDiv.querySelector(".game__choice-image");
	userImg.src = "./assets/images/paper.png";
	userImg.alt = "Waiting for player's choice";

	const computerImg = computerChoiceDiv.querySelector(".game__choice-image");
	computerImg.src = "./assets/images/scissors.png";
	computerImg.alt = "Waiting for computer's choice";

	showGameButtons();
};

const playGame = (humanChoice) => {
	const computerChoice = getComputerChoice();

	updateChoiceDisplay(humanChoice, computerChoice);
	playRound(humanChoice, computerChoice);

	currentRound++;
	updateStats();

	checkGameOver();
};

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

winnerText.textContent = "Choose your play!";
updateStats();
