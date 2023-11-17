// step 1: add event listeners
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value; // to get the input field always use the .value
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3: get the current deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotalString = depositTotalElement.innerText; //jodi kono input field na hoye text hoy tahole vetorer lekha nite innerText use korte hoy
    const prevDepositTotal = parseFloat(prevDepositTotalString);

    // step 4: add numbers to set the total deposit
    const currentDepositTotal = prevDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    // step 6: calculate current total balance
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    depositField.value = '';
})