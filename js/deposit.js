
// step1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use . value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3:get the current deposit total
    // for non-input (element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal+newDepositAmount;
    // set the deposit Total
    depositTotalElement.innerText = currentDepositTotal;

    //  step-5:get ballance current total
    const ballanceTotalElement = document.getElementById('ballance total');
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString)

    // step-6:calculate current total ballance
    const currentBallanceTotal = previousBallanceTotal+newDepositAmount;
    // set the ballance total
    ballanceTotalElement.innerText = currentBallanceTotal;
    // step-7: clear the deposit field 
    depositField.value = '';
    
})