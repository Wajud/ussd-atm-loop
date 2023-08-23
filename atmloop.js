let balance = 100000;
const pin = 2134;
const banks = ["Access Bank", "Eco Bank", "GTB", "Tiidebank", "UBA", "Wema Bank", "Zenith Bank"];

let enteredPin = prompt(`Welcome to TiideBank 
Please enter your secret pin number`);

if (enteredPin == pin) {
    const transactionType = prompt(`What would you like to do today?
    1. Withdraw
    2. Check Balance
    3. Transfer`);

    if (transactionType == 1) {
        const withdrawalAmount = prompt(`How much would you like to withdraw (without the naira symbol)?`);

        if (withdrawalAmount && withdrawalAmount % 100 == 0 && withdrawalAmount < balance) {
            alert(`Kindly have the withdrawn #${withdrawalAmount}
            Your balance is now #${balance - withdrawalAmount}`);
            alert("Thank you for using Tiidebank");
        } else if (withdrawalAmount && withdrawalAmount < balance && withdrawalAmount % 100 != 0) {
            alert(`Please note that only multiples of #100 can be withdrawn`);
        } else if (withdrawalAmount > balance) {
            alert(`Kindly beware that you cannot withdraw beyond your current balance: #${balance}`);
        } else {
            alert("You didn't enter a withdrawal amount");
        }
    } else if (transactionType == 2) {
        alert(`Your current balance is #${balance}`);
        alert("Thank you for using Tiidebank");
    } else if (transactionType == 3) {
        // let selectedBank = -1;
        for (let i = 0; i < banks.length; i++) {
            alert(`${i + 1}. ${banks[i]}`);
        }
        do {
            selectedBank = prompt(`Which bank do you want to transfer to? (Enter the corresponding number)`);
        } while (selectedBank < 1 || selectedBank > banks.length);

        let accountNumber = prompt(`Please enter the account number to transfer to`);

        if (accountNumber.length != 10) {
            alert(`You entered an invalid account number`);
        } else {
            let transferAmount = prompt("How much would you like to Transfer ?");
            
            if (transferAmount && transferAmount < balance) {
                let confirmMessage = prompt(`You are about to transfer #${transferAmount} to ${banks[selectedBank - 1]} user ${accountNumber}
                Press 1 to confirm`);

                if (confirmMessage == 1) {
                    alert(`You have successfully transferred ${transferAmount}
                    Your new balance is #${balance - transferAmount}`);
                    alert("Thank you for using Tiidebank");
                } else {
                    alert(`Transaction terminated`);
                }
            } else if (transferAmount > balance) {
                alert(`Please beware that you cannot transfer beyond your current balance.
                Your current balance is #${balance}`);
            } else {
                alert(`You did not specify the transfer amount.
                Your current balance is: #${balance}`);
            }
        }
    }
} else {
    alert("Pin incorrect");
}
