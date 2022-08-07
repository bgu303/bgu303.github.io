let intervalId;

function start() {
    let totalSalary = 0.0;
    let hoursInput = document.getElementById("hours").value;
    let minutesInput = document.getElementById("minutes").value;
    let totalSeconds = hoursInput * 60 * 60 + minutesInput * 60
    var hourlySalary = document.getElementById("hourly-salary").value;
    var secondlySalary = hourlySalary / 60 / 60

    intervalId = setInterval(function() {
        let hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor(totalSeconds % 3600 / 60);
        var seconds = Math.floor(totalSeconds % 3600 % 60);
        document.getElementById("stopwatch-timer").innerHTML = "Time till freedom: " + hours + ":" + minutes + ":" + seconds
        totalSalary += secondlySalary
        document.getElementById("salary").innerHTML = "Money made so far: " + totalSalary.toFixed(5) + " €"
        totalSeconds--
    }, 1000)
}


/*     document.getElementById("stopwatch-timer").innerHTML = totalSeconds;
    intervalId = setInterval(function () {
        
        document.getElementById("testi").innerHTML = hours;
        document.getElementById("stopwatch-timer").innerHTML -= 1
        totalSalary += secondlySalary
        console.log(totalSalary.toFixed(5))
    }, 1000)
    document.getElementById("button-start").disabled = true;
} */

function stop() {
    clearInterval(intervalId)
}

function resume() {
    
}

function restart() {
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("hourly-salary").value = "";
    document.getElementById("button-start").disabled = false;
    document.getElementById("stopwatch-timer").innerHTML = "";
    document.getElementById("salary").innerHTML = "";
    clearInterval(intervalId);

}