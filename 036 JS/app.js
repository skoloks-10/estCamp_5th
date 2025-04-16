import {
  calculateAdd,
  calculateSub,
  calculateMul,
  calculateDiv,
} from "./basic.js";
import { calculateMod, calculatePow, calculateSqrt } from "./advance.js";

document.addEventListener("DOMContentLoaded", function () {
  new Calculator();
});

class Calculator {
  constructor() {
    this.num1 = document.getElementById("num1");
    this.num2 = document.getElementById("num2");
    this.result = document.getElementById("result");
    this.add = document.getElementById("add");
    this.sub = document.getElementById("sub");
    this.mul = document.getElementById("mul");
    this.div = document.getElementById("div");
    this.mod = document.getElementById("mod");
    this.pow = document.getElementById("pow");
    this.sqrt = document.getElementById("sqrt");
    this.advancedCal = document.getElementById("advanced-calculator");
    this.bindEvents();
  }

  bindEvents() {
    this.add.addEventListener("click", () => {
      const num1 = parseInt(this.num1.value);
      const num2 = parseInt(this.num2.value);
      const result = calculateAdd(num1, num2);
      this.displayResult(result);
    });

    this.sub.addEventListener("click", () => {
      const num1 = parseInt(this.num1.value);
      const num2 = parseInt(this.num2.value);
      const result = calculateSub(num1, num2);
      this.displayResult(result);
    });

    this.mul.addEventListener("click", () => {
      const num1 = parseInt(this.num1.value);
      const num2 = parseInt(this.num2.value);
      const result = calculateMul(num1, num2);
      this.displayResult(result);
    });

    this.div.addEventListener("click", () => {
      const num1 = parseInt(this.num1.value);
      const num2 = parseInt(this.num2.value);
      const result = calculateDiv(num1, num2);
      this.displayResult(result);
    });

    this.mod.addEventListener("click", () => {
      const num1 = parseInt(this.num1.value);
      const num2 = parseInt(this.num2.value);
      const result = calculateMod(num1, num2);
      this.displayResult(result);
    });
    this.pow.addEventListener("click", () => {
      const num1 = parseInt(this.num1.value);
      const num2 = parseInt(this.num2.value);
      const result = calculatePow(num1, num2);
      this.displayResult(result);
    });
    this.sqrt.addEventListener("click", () => {
      const num = parseInt(this.num1.value);
      const result = calculateSqrt(num);
      this.displayResult(result);
    });
  }

  displayResult(value) {
    this.result.textContent = `계산 결과: ${value}`;
  }
}

function hiddenAdvance() {
  const advancedCalculator = document.getElementById("advanced-calculator");
  if (advancedCalculator.style.display == "none") {
    advancedCalculator.style.display = "block";
  } else {
    advancedCalculator.style.display = "none";
  }
}
document.getElementById("displaybtn").addEventListener("click", function () {
  hiddenAdvance();
});
