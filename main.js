#! /usr/bin/env node
//import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";
//display a colourful message
console.log(chalk.bold.cyanBright("\n \t\t Code With Muneeba - Word Counter"));
console.log("=".repeat(60));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
