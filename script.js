const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const number = document.querySelectorAll('.number')

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    display.value = '';
  } else if (clickedButtonValue == "backspace") {
    let string = display.value.toString();
    display.value = string.substr(0, string.length - 1);
  }  else if (clickedButtonValue == "%") {
    display.value = eval(display.value/100)
  } else {
    display.value += clickedButtonValue;
  }
}



