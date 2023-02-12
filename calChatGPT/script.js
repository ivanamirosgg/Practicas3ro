const buttons = document.querySelectorAll('.number, .operator');
const display = document.querySelector('.display');

let currentDisplay = "0";

for (const button of buttons) {
  button.addEventListener('click', function() {
    if (this.classList.contains('number')) {
      if (currentDisplay === "0") {
        currentDisplay = this.innerText;
      } else {
        currentDisplay += this.innerText;
      }
    } else if (this.classList.contains('operator')) {
      if (this.innerText === "C") {
        currentDisplay = "0";
      } else if (this.innerText === "=") {
        currentDisplay = eval(currentDisplay);
      } else {
        currentDisplay += this.innerText;
      }
    }
    display.innerText = currentDisplay;
  });
}
