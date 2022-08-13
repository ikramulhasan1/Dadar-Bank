document.getElementById('login-button').addEventListener("click", function () {
    const emailInput = document.getElementById('email-input')
    const emailInputText = emailInput.value;


    const passwordInput = document.getElementById('password-input')
    const passwordInputText = passwordInput.value;

    if (emailInputText == "ikramulhasan50@gmail.com" && passwordInputText == "H@s@nf@him@@1") {
        window.location.href = "http://dadar-bank.html"

    } 
    
})

