const pin = 2134;
const banks = ["Access Bank", "Eco Bank", "GTB", "UBA", "Wema Bank", "Zenith Bank"];
let balance = 100000;

const transactionType = prompt(`Welcome to TiideBank.
What will you like to do ?
1. Airtime Self
2. Airtime Others
3. Transfer to TiideBank
4. Transfer to Other Banks
`);

switch (transactionType) {
  case '1': {
    let airtimeAmount;
    while (!(airtimeAmount = prompt("How much airtime will you like to purchase ?"))) {
      alert(`Invalid amount entered`);
    }
    alert(`You have successfully purchased #${airtimeAmount} airtime`);
    break;
  }

  case '2': {
    let numberToCredit, airtimeAmount;
    while (!(numberToCredit = prompt(`Enter the phone number you will like to credit`))) {
      alert(`Number to credit is invalid`);
    }
    while (!(airtimeAmount = prompt("How much airtime will you like to purchase ?"))) {
      alert(`You did not enter an airtime amount`);
    }
    const enteredPin = prompt(`You are about to credit ${numberToCredit} an airtime of #${airtimeAmount} 
    Enter your pin to confirm`);
    if (parseInt(enteredPin) === pin) {
      alert(`Transaction Successful`);
    } else {
      alert(`Pin incorrect. Transaction terminated`);
    }
    break;
  }

  case '3': {
    let accountToCredit, creditAmount;
    while (!(accountToCredit = prompt(`Enter Tiideaccount number to Credit`))) {
      alert(`Invalid account number entered`);
    }
    while (!(creditAmount = prompt("How much will you like to Transfer ?"))) {
      alert(`You did not specify an amount to Transfer`);
    }
    const enteredPin = prompt(`You are about to transfer ${creditAmount} to Tiidebank User ${accountToCredit}.
    Enter your pin to confirm.`);
    if (parseInt(enteredPin) === pin) {
      alert(`Transaction Successful`);
    } else {
      alert(`Invalid pin entered. Transaction terminated.`);
    }
    break;
  }

  case '4': {
    let bank, accountNumber, transferAmount;
    while (!(bank = prompt(`Which bank do you want to transfer to ?
    1. Access Bank
    2. Ecobank
    3. GTB
    4. UBA
    5. Wema Bank
    6. Zenith Bank`))) {
      alert(`You did not select a valid bank`);
    }

    while (!(accountNumber = prompt(`Please enter the account number to transfer to`))) {
      alert(`You entered an invalid account number`);
    }

    if (bank >= 1 && bank <= 6 && accountNumber.length === 10) {
      while (!(transferAmount = prompt("How much will you like to Transfer ?"))) {
        alert(`You did not specify the transfer amount. Your current balance is: #${balance}`);
      }

      if (transferAmount > balance) {
        alert(`Please beware that you cannot transfer beyond your current balance. Your current balance is #${balance}`);
      } else {
        const enteredPin = prompt(`You are about to transfer #${transferAmount} to ${banks[bank - 1]} user: ${accountNumber}.
        Enter your pin to confirm.`);
        if (parseInt(enteredPin) === pin) {
          alert(`You have successfully transferred ${transferAmount}
          Your balance now is #${balance - transferAmount}`);
          alert("Thank you for using Tiidebank");
        } else {
          alert(`Invalid pin entered. Transaction terminated.`);
        }
      }
    } else {
      alert(`You entered an invalid account number`);
    }
    break;
  }

  default: {
    alert(`Invalid Transaction type selected`);
    break;
  }
}
