function generatePassword() {
    let length = document.getElementById("length").value;

    let upper = document.getElementById("uppercase").checked;
    let lower = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()";

    let allChars = "";

    if (upper) allChars += upperChars;
    if (lower) allChars += lowerChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    
    if (allChars === "") {
        alert("Please select at least one option");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;
}