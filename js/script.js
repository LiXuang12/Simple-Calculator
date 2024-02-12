const display = document.getElementById("display");
const historyDisplay = [];

function addToScreen(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value =  eval(display.value);
}

function deleteNum() {
    let currentDisplay = display.value;
    let updateDisplay = currentDisplay.slice(0, -1);
    display.value = updateDisplay;
}

// function historyDisplay() {
//     let historyScreen = "";
//     history.forEach(cal => {
//         historyScreen += `${cal.ex} = ${cal.res}\n`; // Perbaikan sintaksis template literal
//     });
//     alert("History:\n" + historyScreen); // Menambahkan pesan ke dalam alert
// }


document.addEventListener("keydown", function(event) {
    if ((event.key >= "0" && event.key <= "9") || event.key === "." || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%") {
        addToScreen(event.key);
    } else if (event.key === "c") {
        clearDisplay();
    }else if(event.key === "Enter") {
        calculate();
    }else if(event.key === "Backspace"){
        deleteNum();
    }else if(event.key === "h"){
        historyDisplay();
    }
});



