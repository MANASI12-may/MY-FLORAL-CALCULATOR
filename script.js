var displayField = document.getElementById('display');

function appendValue(buttonInput) {
    displayField.value = displayField.value + buttonInput;
}

function clearScreen() {
    displayField.value = "";
}

function calculateResult() {
    try {
        if (displayField.value != "") {
        let expression = displayField.value.replace(/%/g, '/100');
            displayField.value = eval(expression);
        }
    } catch (error) {
        displayField.value = "Error";
    }
}
