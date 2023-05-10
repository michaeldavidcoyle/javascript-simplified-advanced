// 1. Ask for account
// 2. If account does not exist, ask to create account
// 3. Ask what user wants to do
// 4. Execute command
//     a. View
//     b. Withdraw
//     c. Deposit

// Account class
const Account = require('./Account');
const CommandLine = require('./CommandLine');

async function main() {
    const accountName = await CommandLine.ask('Please enter account name:');
    let account = await Account.find(accountName);

    if (account == null) account = await promptCreateAccount(accountName);
}

async function promptCreateAccount(accountName) {
    const response = CommandLine.ask('That account does not exist, would you like to create it? (y/n)');

    if (response === 'y' || response === 'Y') {
        return await Account.create(accountName);
    }
}

main();