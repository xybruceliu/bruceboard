function clickRed() {
    document.getElementById("textareabox").value += "s";
}

function clickGreen() {
    document.getElementById("textareabox").value  += 'g';
}

function clickBlue() {
    document.getElementById("textareabox").value += 'k';
}

function clickWhite() {
    var text = document.getElementById("textareabox").value
    document.getElementById("textareabox").value = text.substring(0,text.length-1);
}