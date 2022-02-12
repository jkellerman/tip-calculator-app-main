const inputs = document.querySelectorAll("input");
const billInput = document.querySelector("#bill");
const numOfPeopleInput = document.querySelector("#number-of-people");
const customTipInput = document.querySelector("#custom-tip");
const buttons = document.querySelectorAll(".button");
let tipAmountValue = document.querySelector(".tip-amount-value");
let totalValue = document.querySelector(".total-value");
const resetButton = document.querySelector(".reset");
let buttonClicked = false; // incase we need a variable that states button has been clicked
let clickedButtonValue = 0; // incase we need a variable that gives us the value of the clicked button
let perPersonMinusTip = billInput.value / numOfPeopleInput.value;
let perPersonTip = (customTipInput.value / 100) * perPersonMinusTip;

// activate reset button when number is inputted into any input field and clear input fields when reset button is clicked

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let inputValue = parseInt(e.value);
    if (typeof inputValue === "number") {
      resetButton.style.opacity = "1";
      resetButton.style.cursor = "pointer";

      resetButton.addEventListener("mouseenter", () => {
        resetButton.style.backgroundColor = "var(--hover)";
        resetButton.style.borderColor = "var(--hover)";
      });

      resetButton.addEventListener("mouseleave", () => {
        resetButton.style.backgroundColor = null;
        resetButton.style.borderColor = null;
      });

      resetButton.addEventListener("click", () => {
        inputs.forEach((input) => {
          input.value = "";
        });
      });
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    customTipInput.value = "";
    buttonClicked = true;
    clickedButtonValue = button.innerText;
    console.log(parseInt(clickedButtonValue));
  });
});

function customInput() {
  if (
    !billInput.value === 0 &&
    !numOfPeopleInput.value === 0 &&
    !customTipInput.value === 0
  ) {
    calcuateTipForCustom();
  }
}

customInput();

function calcuateTipForCustom() {
  let total = perPersonMinusTip + perPersonTip;
  tipAmountValue.innerText = perPersonTip.toFixed(2);
  totalValue.innerText = total.toFixed(2);
}
