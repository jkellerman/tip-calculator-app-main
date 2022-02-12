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

// active reset button when number is inputted into field and clear inputs when reset button is clicked

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

// let a = 10;
// tipAmountValue.innerText = a.toFixed(2);
