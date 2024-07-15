import inquirer from "inquirer";
let myBalance = 5000; //Rupees
let myPin = 2468;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "Plz enter your Pin",
        type: "number",
    }
]);
//  conditional statements
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code <!!!> ");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Plz choose any option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAnswer.operation == "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Plz enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remianing balance is ", myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your remianing balance is ${myBalance}`);
    }
}
else {
    console.log("Plz enter valid pin");
}
