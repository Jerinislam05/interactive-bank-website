// step 1: add event listeners
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the amount from the deposit input field
    const deposit = document.getElementById('deposit-field');
    const depositAmount = deposit.value; // to get the input field always use the .value
    // step 3: get the current deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText; //jodi kono input field na hoye text hoy tahole vetorer lekha nite innerText use korte hoy
    depositTotalElement.innerText = depositAmount;
})