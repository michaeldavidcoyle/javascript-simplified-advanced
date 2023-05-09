const fs = require('fs');

module.exports = class Account {
    constructor(name) {
        this.#name = name;
    }

    #name;
    #balance;

    get name() {
        return this.#name;
    }

    get balance() {
        return this.#balance;
    }

    get filePath() {
        return `accounts/${this.name}.txt`;
    }

    #load() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, (err, data) => {
                if (err) return reject(err);
                this.#balance = parseFloat(data);
                resolve();
            });
        });
    }

    static async find(accountName) {
        const account = new Account(accountName);

        try {
            await account.#load();
            return account;
        } catch (e) {
            return;
        }
    }
}