/*
1.ass event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
2.5: also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5:set total withdraw amount
5.get the previous balance total
6.calculate new ballance total
6.5:set the new ballance total
7.clear the input field
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount= parseFloat(newWithdrawAmountString);

    // step-7
    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    // step-3
    const WithdrawTotalElement = document.getElementById('Withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    
  
    //  step-5
     const ballanceTotalElement = document.getElementById('ballance total')
     const previousBallanceTotalString = ballanceTotalElement.innerText;
     const previousBallanceTotal = parseFloat(previousBallanceTotalString);

     

     if(newWithdrawAmount>previousBallanceTotal){
        alert('Baper bank e ato taka nay');
        return;
     }

       // step-4
       const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
       WithdrawTotalElement.innerText = currentWithdrawTotal;

    //  step-6
      const newBallanceTotal = previousBallanceTotal-newWithdrawAmount;
      ballanceTotalElement.innerText = newBallanceTotal;

    

})