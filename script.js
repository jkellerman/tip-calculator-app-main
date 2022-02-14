const inputs = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset");
const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#custom-tip");
const numOfPeopleInput = document.querySelector("#number-of-people");
const buttons = document.querySelectorAll(".button");

// activate reset button when number is inputted into any input field and clear input fields when reset button is clicked
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let inputNumber = parseFloat(e.data);
    if (typeof inputNumber === "number") {
      resetButton.style.opacity = "1";
      resetButton.style.cursor = "pointer";

      resetButton.addEventListener("mouseenter", () => {
        resetButton.style.backgroundColor = "var(--hover)";
        resetButton.style.borderColor = "var(--hover)";
        resetButton.style.transition = "0.2s ease-in-out";
      });

      resetButton.addEventListener("mouseleave", () => {
        resetButton.style.backgroundColor = null;
        resetButton.style.borderColor = null;
      });

      // clear input fields and  tip totals

      resetButton.addEventListener("click", () => {
        inputs.forEach((input) => {
          input.value = "";
        });
        let tipValue = document.querySelector(".tip-amount-value");
        tipValue.innerText = parseFloat("0").toFixed(2);
        let totalValue = document.querySelector(".total-value");
        totalValue.innerText = parseFloat("0").toFixed(2);
      });
    }
  });
});

// add event listeners for input fields which perform calculation when custom tip is selected

billInput.addEventListener("input", customCalculate);
numOfPeopleInput.addEventListener("input", customCalculate);
customTipInput.addEventListener("input", () => {
  if (customTipInput.value >= 1) {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  }
  customCalculate();
});

// add event listeners for buttons which perform calculation when they are selected

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    let buttonValue = parseInt(button.innerText);
    customTipInput.value = "";
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    calculate(buttonValue);
  });
});

// add event listeners for inputs which perform calculations when buttons are selected

billInput.addEventListener("input", buttonCalculate);
numOfPeopleInput.addEventListener("input", buttonCalculate);

function buttonCalculate() {
  let activeButton = document.querySelector(".active");
  let billInputValue = parseFloat(document.querySelector("#bill").value);
  let numOfPeopleValue = parseInt(
    document.querySelector("#number-of-people").value
  );

  if (
    billInput.value >= 1 &&
    numOfPeopleInput.value >= 1 &&
    activeButton.classList.contains("active")
  ) {
    let activeButtonValue = parseInt(activeButton.innerText);
    let totalMinusTip = billInputValue / numOfPeopleValue;
    let tipPerPerson = totalMinusTip * (activeButtonValue / 100);
    let totalPerPerson = totalMinusTip + tipPerPerson;

    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = tipPerPerson.toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = totalPerPerson.toFixed(2);
  } else {
    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = parseFloat("0").toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = parseFloat("0").toFixed(2);
  }
}

function customCalculate() {
  if (
    billInput.value >= 1 &&
    customTipInput.value >= 1 &&
    numOfPeopleInput.value >= 1
  ) {
    let billInputValue = parseFloat(document.querySelector("#bill").value);
    let customTipValue = parseFloat(
      document.querySelector("#custom-tip").value
    );
    let numOfPeopleValue = parseInt(
      document.querySelector("#number-of-people").value
    );
    let totalMinusTip = billInputValue / numOfPeopleValue;
    let tipPerPerson = totalMinusTip * (customTipValue / 100);
    let totalPerPerson = totalMinusTip + tipPerPerson;

    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = tipPerPerson.toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = totalPerPerson.toFixed(2);
  } else {
    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = parseFloat("0").toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = parseFloat("0").toFixed(2);
  }
}

function calculate(tipPercent) {
  if (billInput.value >= 1 && numOfPeopleInput.value >= 1) {
    let billInputValue = parseFloat(document.querySelector("#bill").value);
    let numOfPeopleValue = parseInt(
      document.querySelector("#number-of-people").value
    );
    let totalMinusTip = billInputValue / numOfPeopleValue;
    let tipPerPerson = totalMinusTip * (tipPercent / 100);
    let totalPerPerson = totalMinusTip + tipPerPerson;

    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = tipPerPerson.toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = totalPerPerson.toFixed(2);
  } else {
    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = parseFloat("0").toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = parseFloat("0").toFixed(2);
  }
}
