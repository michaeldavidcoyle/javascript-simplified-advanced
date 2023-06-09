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
    try {
        const accountName = await CommandLine.ask('Please enter account name:');
        let account = await Account.find(accountName);

        if (account == null) account = await promptCreateAccount(accountName);
        if (account != null) account = await promptTask(account);
    } catch (e) {
        CommandLine.print('Sorry, something went wrong. Please try again.')
    }
}

async function promptCreateAccount(accountName) {
    const response = await CommandLine.ask(
        'That account does not exist, would you like to create it? (y/n)'
    );

    if (response === 'y' || response === 'Y') {
        return await Account.create(accountName);
    }
}

async function promptTask(account) {
    const response = await CommandLine.ask(
        'What would you like to do? (view/deposit/withdraw)'
    );

    if (response === 'deposit') {
        const amount = parseFloat(await CommandLine.ask('Enter deposit amount:'));
        await account.deposit(amount);
    } else if (response === 'withdraw') {
        const amount = parseFloat(await CommandLine.ask('Enter amount to withdraw:'));
        try {
            await account.withdraw(amount);
        } catch(e) {
            CommandLine.print('Sorry, your account has insufficient funds to cover this withdrawal.');
        }
    }

    CommandLine.print(`Your balance is ${account.balance}`);
}

main();