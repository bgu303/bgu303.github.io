
function generate() {

    var input = Number(document.getElementById("input").value);
    var result = "Your new password is: ";
    var passwordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    if (input < 12) {
        document.getElementById("generatedPassword").innerHTML = "Please input higher value than 11";
    } else {
        for (var i = 0; i < input; i++) {
            result += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
            document.getElementById("generatedPassword").innerHTML = result;
        }
    }
    
}

function generateWithSymbols() {

    var input = Number(document.getElementById("input").value);
    var result = "Your new password is: ";
    var passwordCharsWithSymbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()?=!@%&^*";

    if (input < 12) {
        document.getElementById("generatedPassword").innerHTML = "Please input higher value than 11"; 
    } else {
        for (var i = 0; i < input; i++) {
            result += passwordCharsWithSymbols.charAt(Math.floor(Math.random() * passwordCharsWithSymbols.length));
            document.getElementById("generatedPassword").innerHTML = result;  
        }
    }
    
}