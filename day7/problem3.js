/*Create a class BankAccount with accountNo, holderName and balance. Use a constructor to initialize
the account. Provide instance methods deposit(amount), withdraw(amount), and displayBalance()
Withdrawl should not be allowed when the requested amount is greater than the available balance.
Create a static method bankInfo() that displays the bank name and general banking information. Create
two account objects and perform different transactions on them*/

class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited: " + amount);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log("Withdrawn: " + amount);
        }
    }

    displayBalance() {
        console.log("Account No: " + this.accountNo);
        console.log("Holder Name: " + this.holderName);
        console.log("Balance: " + this.balance);
    }

    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Banking Information: Secure and reliable banking services.");
    }
}

let account1 = new BankAccount(101, "Sarthak", 10000);
let account2 = new BankAccount(102, "Rahul", 5000);

account1.deposit(2000);
account1.withdraw(3000);
account1.displayBalance();

console.log("----------------------");

account2.deposit(1000);
account2.withdraw(7000);
account2.displayBalance();

console.log("----------------------");

BankAccount.bankInfo();

