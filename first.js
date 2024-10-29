
let displayValue = '';       // Holds the current display value
let storedValue = '';        // Holds the first number entered
let currentOperation = null;

function buttonpress(value){
    displayValue = displayValue + value;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').innerText = displayValue  ;
}

function setoperations(operation){
    if(displayValue == '') return ;
    storedValue = displayValue;
    currentOperation = operation;
    displayValue = '';
}

function CalciResults(){
    if(!currentOperation || displayValue === '' ) return ;
    const firstEle = parseFloat(storedValue);
    const secondEle = parseFloat(displayValue);

    switch(currentOperation){
        case '+' :
            displayValue = (firstEle + secondEle).toString();
             break;
        case '-' :
            displayValue = (firstEle - secondEle).toString();
            break;
        case 'x':
            displayValue = (firstEle * secondEle).toString();
            break;
        case '/':
            displayValue = (firstEle / secondEle).toString();
            break;
    }
    currentOperation = null;  // Reset operation
    storedValue = '';         // Reset stored value
    updateDisplay();
}

function resetdisplay(){    //reset button
    displayValue = '';
    storedValue = '';
    currentOperation = null;
    updateDisplay();
}

function deleteLastEle(){   // delete button
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}