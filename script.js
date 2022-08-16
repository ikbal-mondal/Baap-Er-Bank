// step-1: click handler with the submit button
document.getElementById("btn_submit").addEventListener("click", function(){

     // step-2: get the email address inside the email  input field 
     // always remember  to use  .value to  get text from an input field 
    const emailField = document.getElementById("user_email");
    const email = emailField.value;

    // step-3 get password
    const passwordField = document.getElementById("user_Password");
    const password = passwordField.value;
    
    if(email.toLowerCase() === "monirul@baap.com" && password === '6360663455' || email.toLowerCase() === "aminul@bd.com" && password === '12345678' || email.toLowerCase() === "rifat@bd.com" && password === '12345678' ||  email.toLowerCase() === "ikbal@baap.com" && password === '9064743262'  ){
        
        location.href = "inner_index.html";
    }
      else{

        alert("tumi email and password vule gecho !!! ")
      }
})