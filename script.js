const inputs = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset");
const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#custom-tip");
const numOfPeopleInput = document.querySelector("#number-of-people");

// Get bill input when input is selected & calculate
billInput.addEventListener("input", calculate);
customTipInput.addEventListener("input", calculate);
numOfPeopleInput.addEventListener("input", calculate);

function calculate() {
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
