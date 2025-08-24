const from = document.querySelector("#from");
const to = document.querySelector("#to");
const form = document.querySelector("form");
const price = document.querySelector(".price");
const time = document.querySelector(".time");
const income = document.querySelector("#income");
const incomeBtn = document.querySelector(".income-btn");

income.value = localStorage.getItem("income");

const monthIncome = localStorage.getItem("income");
const pricePerHour = monthIncome / 30 / 9;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fromTime = from.value;
  const toTime = to.value;
  if (fromTime && toTime) {
    const hourDiff = toTime.split(":")[0] - fromTime.split(":")[0];
    time.innerHTML = " ساعة " + hourDiff;
    const final = Math.round(hourDiff * pricePerHour);
    price.innerHTML = " ج " + final;
  }
});

incomeBtn.addEventListener("click", (e) => {
  if (income.value) {
    localStorage.setItem("income", income.value);
  }
});
