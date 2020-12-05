const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

function check_answer(a, index) {
    if (index == a) {
        console.log(chalk.green("Yup, you got it right!\n"));
        score += 1;
    } else {
        console.log(chalk.red("Nope, you got it wrong :(\n"));
    }
}

var user_scores = [{
        name: "Malavika",
        score: 10
    },
    {
        name: "Anu",
        score: 9
    },

]

var questions = [{
        q: "What is Malavika's favourite food?",
        options: ["Biriyani", "Burger", "Pizza", "Steak"],
        a: 0
    },
    {
        q: "What would Malavika prefer?",
        options: ["Coffee", "Tea"],
        a: 1
    },
    {
        q: "Malavika's current favourite series?",
        options: ["Jane The Virgin", "Brooklyn Nine Nine", "Schitts Creek", "Grey's Anatomy"],
        a: 2
    },

    {
        q: "What season does Malavika like the most?",
        options: ["Summer", "Monsoon", "Winter"],
        a: 1
    },


    {
        q: "Malavika's dream vacation?",
        options: ["New Zealand", "Maldives", "Australia"],
        a: 1
    },

    {
        q: "Malavika loves to?",
        options: ["Dance", "Sing", "Play the trumpet"],
        a: 0
    },


    {
        q: "What does Malavika prefer?",
        options: ["Beaches", "Mountains"],
        a: 0
    },

    {
        q: "Which phone does Malavika use currently?",
        options: ["Samsung Galaxy M31", "Redmi Note 5 Pro", "Vivo V11"],
        a: 1
    },

    {
        q: "Malavika's favourite color?",
        options: ["Blue", "Yellow"],
        a: 0
    },

    {
        q: "Sweet or spicy? What type of food does Malavika like?",
        options: ["Sweet", "Spicy"],
        a: 1
    },

];

console.log(chalk.underline.bold.bgCyan("How well do you know Malavika? \n\n"));

var user = readlineSync.question("Hello! Please enter your name!\n");


console.log(chalk.cyanBright("\n\nWelcome, " + user + '!'));
console.log(chalk.italic.cyanBright("\nHere are your questions. Good luck! \n\n"));


for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].q)
    index = readlineSync.keyInSelect(questions[i].options, "Enter options ");
    check_answer(questions[i].a, index);
}

console.log(chalk.cyanBright("Your total score is " + score + "/10."));

if (score <= 5) {
    console.log(chalk.cyanBright("\nYou need to get to know Malavika more!\n"));
} else {
    console.log(chalk.cyanBright("\nYou know Malavika pretty well!\n"));
}

console.log(chalk.underline("Other Top Scorers"));
for (let i = 0; i < user_scores.length; i++) {
    console.log(user_scores[i].name, " : ", user_scores[i].score);
}