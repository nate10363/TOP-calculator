let previousValue = '';
let currentValue = '';
let operator = '';
let result = '';



document.addEventListener('DOMContentLoaded', function() {
    let currentValueDiv = document.querySelector('#currentValueDiv');
    let resultsContainer = document.querySelector('#resultsContainer');
    let numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => number.addEventListener('click', function() {
        if (currentValue.length < 5) {
        currentValue+= number.textContent;
        currentValueDiv.innerHTML = currentValue;
    }}));

    function equate() {
        if ((previousValue === '') || (currentValue === '')) {
            alert('define parameters!')
        } else {
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
            if ((previousValueNum == 1) && (currentValueNum == 0)) {
                currentValueDiv.style.fontSize = '24px';
                currentValueDiv.style.color = 'red';
                resultsContainer.style.backgroundColor = 'purple';
                currentValueDiv.innerHTML = 'nice try dividing by 0, idiot';
            }
        }
    };

    let operators = document.querySelectorAll('.operator');
    operators.forEach((op) => op.addEventListener('click', function() {
        if ((currentValue !== '') && (previousValue !== '')) {
            equate();
            operator = op.textContent;
            previousValue = currentValue;
            currentValue = '';
        } else {
            operator = op.textContent;
            previousValue = currentValue;
            currentValue = '';
        }
    })); 

    let equalSign = document.querySelector('#equalSign');
    equalSign.addEventListener('click', equate);

    let clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', function() {
        previousValue = '';
        currentValue = '';
        currentValueDiv.innerHTML = '';

        currentValueDiv.style.fontSize = '50px';
        currentValueDiv.style.color = 'black';
        resultsContainer.style.backgroundColor = 'lightgray';
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