const max = parseInt(prompt("Enter the maximum number"));
while (!max) {
    max = parseInt(prompt("Enter a valid number"));
}

const target = Math.floor((Math.random() * max) + 1);
var guess = parseInt(prompt("Enter your first guess"));
var attempts = 1;

while (guess !== target) {
    attempts++;

    if (guess > target) {
        guess = parseInt(prompt("Curb your enthusiasm"));
    }

    if (guess < target) {
        guess = parseInt(prompt("Think big, dude"));
    }
}

// Display the attempts after the loop is finished
document.getElementById("output").innerHTML = `Victory at last, it took you ${attempts} attempts`;
