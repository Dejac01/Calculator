var calculator = document.createElement('div');
calculator.innerHTML = '<input type="text" id="calculator-input" />';
calculator.innerHTML += '<button id="calculator-add">+</button>';
calculator.innerHTML += '<button id="calculator-subtract">-</button>';
calculator.innerHTML += '<div id="calculator-result"></div>';



var calculatorInput = document.getElementById('calculator-input');
var calculatorAdd = document.getElementById('calculator-add');
var calculatorSubtract = document.getElementById('calculator-subtract');
var calculatorResult = document.getElementById('calculator-result');
var calculatorValue = 0;

calculatorAdd.addEventListener('click', function() {
  calculatorValue += parseInt(calculatorInput.value);
  calculatorResult.innerHTML = calculatorValue;
});

calculatorSubtract.addEventListener('click', function() {
  calculatorValue -= parseInt(calculatorInput.value);
  calculatorResult.innerHTML = calculatorValue;
});



