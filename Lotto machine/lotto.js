function lotto() {
    document.getElementById("answer").innerHTML = " ";
    var weeks = 1;
    
    while (lottoNumber != 1) {
        var lottoNumber = Math.floor(Math.random() * 18643560 + 1);
        weeks++;
        var years = weeks/52;
    }
    document.getElementById("answer").innerHTML = "Loton voittamiseen meni " + years.toFixed(2) + " vuotta";
}