let result = document.getElementById('result');

function getResult(val) {
    result.value += val;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;
}
