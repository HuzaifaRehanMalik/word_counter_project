#! /usr/bin/env node 
import inquirer from "inquirer";
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startWordCounter(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write paragraph here(Press Ctrl+C to Exit) .... ",
            name: "paragraph",
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCounter(counter);
