#!/usr/bin/env node
import inquirer from "inquirer";
const currency_rates = {
    USD: 1,
    EUR: 5.76,
    GBP: 10.88,
    INR: 100,
    PKR: 300,
};
let userAns = await inquirer.prompt([{
        name: 'from',
        message: 'enter from currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'to',
        message: 'enter to currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: 'enter your amount',
        type: 'number',
    },
]);
let fromAmount = currency_rates[userAns.from];
let toAmount = currency_rates[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(2));
