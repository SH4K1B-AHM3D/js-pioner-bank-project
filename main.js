// login button
const loginBtn = document.getElementById("login").addEventListener("click", function(){
    const loginArea = document.getElementById("login-area").style.display = "none";
    const transactionArea = document.getElementById("transaction-area").style.display = "block";
    
})

// deposit button
    const depositBtn = document.getElementById("deposit-btn").addEventListener("click", function(){

    const depositAmount = parseFloat(document.getElementById("deposit-amount").value);

    updateBalance("current-deposit", depositAmount);
    updateBalance("current-balance", depositAmount);
   

    document.getElementById("deposit-amount").value = "";
})

// withdraw button

const withdrawBtn = document.getElementById("withdraw-btn").addEventListener("click", function(){

    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    
    updateBalance("current-withdraw", withdrawAmount);
    updateBalance("current-balance", -1 * withdrawAmount);


    document.getElementById("withdraw-amount").value = "";
    
})

function updateBalance(id, depositOrWithdrawAmount) {
    const current = parseFloat(document.getElementById(id).innerText);
    const totalBalance = current + depositOrWithdrawAmount;
    document.getElementById(id).innerText = totalBalance;

}