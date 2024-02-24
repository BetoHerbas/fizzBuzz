import generateFizzBuzz from "./generateFizzBuzz";

const form = document.getElementById("fizzBuzz-form");
const number = document.getElementById("number");
const resultDiv = document.getElementById("res-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  resultDiv.innerHTML = "<p>" + generateFizzBuzz(number.value) + "</p>";
});
