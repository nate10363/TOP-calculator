let previousValue = '';
let currentValue = '';
let operator = '';
let result = '';



document.addEventListener('DOMContentLoaded', function() {
    let currentValueDiv = document.querySelector('#currentValueDiv');
    // currentValueDiv.innerHTML = currentValue;

    let numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => number.addEventListener('click', function() {
        if (currentValue.length < 5) {
        currentValue+= number.textContent;
        currentValueDiv.innerHTML = currentValue;

        // if ((currentValue !== '') && (previousValue !== '')) {
        //     equate();
        // }
}}));

    function equate() {
        let previousValueNum = Number(previousValue);
        let currentValueNum = Number(currentValue);
        
        if (operator === '+') {
            currentValue = previousValueNum + currentValueNum;
            currentValueDiv.innerHTML = currentValue;
        } 
        if (operator === '-') {
            currentValue = previousValueNum - currentValueNum;
            currentValueDiv.innerHTML = currentValue;
        } 
        if (operator === 'x') {
            currentValue = previousValueNum * currentValueNum;
            currentValueDiv.innerHTML = currentValue;
        } 
        if (operator === '/') {
            currentValue = previousValueNum / currentValueNum;
            currentValueDiv.innerHTML = currentValue;
        } 
    };

    let operators = document.querySelectorAll('.operator');
    operators.forEach((op) => op.addEventListener('click', function() {
        operator = op.textContent;
        previousValue = currentValue;
        currentValue = '';
    })); 

    let equalSign = document.querySelector('#equalSign');
    equalSign.addEventListener('click', equate);

    let clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', function() {
        previousValue = '';
        currentValue = '';
        currentValueDiv.innerHTML = '';
    });
    
})

// function equate() {
//     let previousValueNum = Number(previousValue);
//     let currentValueNum = Number(currentValue);
    
//     if (operator === '+') {
//         currentValue = previousValueNum + currentValueNum;
//         currentValueDiv.innerHTML = currentValue;
//     } 
//     if (operator === '-') {
//         currentValue = previousValueNum - currentValueNum;
//         currentValueDiv.innerHTML = currentValue;
//     } 
//     if (operator === 'x') {
//         currentValue = previousValueNum * currentValueNum;
//         currentValueDiv.innerHTML = currentValue;
//     } 
//     if (operator === '/') {
//         currentValue = previousValueNum / currentValueNum;
//         currentValueDiv.innerHTML = currentValue;
//     } 
// };
