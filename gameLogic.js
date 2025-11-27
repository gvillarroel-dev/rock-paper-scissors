const getComputerChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * options.length);
	console.log(randomIndex);

	return options[randomIndex];
};

console.log(getComputerChoice());
