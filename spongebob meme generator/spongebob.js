let memeText = document.getElementById("outputText");

function createMeme() {

    memeText.innerHTML = "";

    let input = document.getElementById("input").value;

    for (let i = 0; i < input.length; i++) {
        let random = Math.floor(Math.random() * 2 + 1);
        
        if (random === 1) {
            memeText.innerHTML += input.charAt(i).toUpperCase();
        } else {
            memeText.innerHTML += input.charAt(i).toLowerCase();
        }
    }
}