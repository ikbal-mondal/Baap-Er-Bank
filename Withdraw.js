/**
 *1. add even handler with the withdraw btn
 *2. get the withdraw amount from the withdraw input field
 *2-5. also make sure to convert the input into a number by using parseFloat
  3. get previous withdraw total 
  4. calculate total withdraw amount 
 4-5 set total withdraw amount 
  5. get the previous balance
  .6 calculate new balance total 
  6-5 set the new balance total
 7. clear the input field
 */

// step-1

document.getElementById('btn_withdraw').addEventListener("click", function(){

    // step-2
    const withdrawField = document.getElementById("withdraw_field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    
    // step-7    
   withdrawField.value = "";

    if(isNaN(newWithdrawAmount)){
       alert("please provide a valid amount ")    
      return;
    }

    // step-3 

    const WithdrawTotalElement = document.getElementById("Withdraw_total");
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

 

   // step-5 

     const balanceTotalElement = document.getElementById("balance_total");
       const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 
  
  

     if(newWithdrawAmount > previousBalanceTotal ){

        alert("baaper bank a eto taka nay ")
        return;
     }
    
        // step-4

   const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   WithdrawTotalElement.innerText = currentWithdrawTotal;



     // step-6 

      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      balanceTotalElement.innerText = newBalanceTotal;

  
 
})