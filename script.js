const date = document.querySelector("#date");

const luckyNumber = document.querySelector("#lucky-number");

const button = document.querySelector("#button");

const output = document.querySelector("#output");

function compare(sum, luckynumber) {
  if (sum % luckynumber == 0) {
    output.innerText = "Your Birthday is Lucky 🥳";
  } else {
    output.innerText = "Your Birthday Is not so Lucky 😥😥";
  }
}

function isbirthdaylucky() {
  const dob = date.value;
  const sum = calculateSum(dob);
  if (luckyNumber.value > 0 && dob) {
    compare(sum, luckyNumber.value);
  } else
    output.innerText =
      "Plese enter a valid data and number must be greater than zero";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

button.addEventListener("click", isbirthdaylucky);
