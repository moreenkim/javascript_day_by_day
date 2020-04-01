const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
    // alert('The result is' + result);
    // return result;
}

//currentResult = add(1, 2);
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

addBtn.addEventListener('click', add);




