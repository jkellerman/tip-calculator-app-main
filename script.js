const inputs = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset");
const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#custom-tip");
const numOfPeopleInput = document.querySelector("#number-of-people");
const buttons = document.querySelectorAll(".button");
const errorbill = document.querySelector(".error-bill");
const errorPeople = document.querySelector(".error-people");

// activate reset button when number is inputted into any input field and clear input fields when reset button is clicked

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    input.style.borderColor = null; // turns border color back to normal after error message
    errorbill.innerText = null; // removes any error messages
    errorPeople.innerText = null; // removes any error messages
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
        removeAmounts();
        buttons.forEach((button) => {
          button.classList.remove("active");
        });
        errorbill.innerText = null;
        errorPeople.innerText = null;
        billInput.style.borderColor = null;
        numOfPeopleInput.style.borderColor = null;
      });
    }
    limit(input);
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

billInput.addEventListener("input", buttonCalculate);
numOfPeopleInput.addEventListener("input", buttonCalculate);
buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    customTipInput.value = "";
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    buttonCalculate();
  });
});

// functions

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
    removeAmounts();
  }
}

function buttonCalculate() {
  let activeButton = document.querySelector(".active");
  let billInputValue = parseFloat(document.querySelector("#bill").value);
  let numOfPeopleValue = parseInt(
    document.querySelector("#number-of-people").value
  );

  if (billInput.value >= 1 && numOfPeopleInput.value >= 1) {
    let activeButtonValue = parseInt(activeButton.innerText);
    let totalMinusTip = billInputValue / numOfPeopleValue;
    let tipPerPerson = totalMinusTip * (activeButtonValue / 100);
    let totalPerPerson = totalMinusTip + tipPerPerson;

    let tipValue = document.querySelector(".tip-amount-value");
    tipValue.innerText = tipPerPerson.toFixed(2);
    let totalValue = document.querySelector(".total-value");
    totalValue.innerText = totalPerPerson.toFixed(2);
  } else {
    removeAmounts();
  }
}

// Remove total amounts

function removeAmounts() {
  let tipValue = document.querySelector(".tip-amount-value");
  tipValue.innerText = parseFloat("0").toFixed(2);
  let totalValue = document.querySelector(".total-value");
  totalValue.innerText = parseFloat("0").toFixed(2);
}

// limit characters entered into input

function limit(element) {
  let max_chars = 8;
  if (element.value.length > max_chars) {
    element.value = element.value.substring(0, max_chars);
  }
}

// event listeners for when enter button is pressed and not all input fields have been filled

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && billInput.value === "") {
    billInput.style.borderColor = "var(--error)";
    errorbill.innerText = "Can't be zero";
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && numOfPeopleInput.value === "") {
    numOfPeopleInput.style.borderColor = "var(--error)";
    errorPeople.innerText = "Can't be zero";
  }
});
