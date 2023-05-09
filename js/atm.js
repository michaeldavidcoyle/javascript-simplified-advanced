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
    const account = await Account.find(accountName);

    if (account) {
        console.log('Found acct');
    } else {
        console.log('No account matching that name.')
    }
}

main();