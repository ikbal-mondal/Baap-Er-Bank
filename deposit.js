// step-1 addEventListener to deposit button 

document.getElementById("btn_deposit").addEventListener("click", function (){

   // step- 2 : get the deposit amount from the deposit input filed
   const depositField = document.getElementById("deposit_field");

   const NewDepositAmountString = depositField.value;
   
 const NewDepositAmount = parseFloat(NewDepositAmountString)
 
   // step-3 get the current deposit total
   // for non input (element other then input, textarea) use innerText to get the text
   const depositTotalElement  = document.getElementById("deposit_total");
   const PreviousDepositTotalString  = depositTotalElement.innerText;

   const PreviousDepositTotal = parseFloat(PreviousDepositTotalString)
    // step-4 : add number to set the total deposit 
   const currentDepositTotal = PreviousDepositTotal + NewDepositAmount;

    // set the deposit total 
   depositTotalElement.innerText = currentDepositTotal;
   

   // step-5 get ballance current total 

   const balanceTotalElement = document.getElementById("balance_total");
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   
   // step-6: calculate current total balance

   const currentBalanceTotal = previousBalanceTotal + NewDepositAmount;
  
   // set the balance total 

   balanceTotalElement.innerText = currentBalanceTotal;


    // step-7 clear the deposit filed

    depositField.value = "";

})