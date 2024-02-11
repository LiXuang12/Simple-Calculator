const display = document.getElementById("display");

function addToScreen(input) {
    display.value += input;
}

function clear() {
    display.value = "";
}

function calculate() {
    display.value =  eval(display.value);
}