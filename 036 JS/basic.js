export function calculateAdd(num1, num2) {
  return num1 + num2;
}

export function calculateSub(num1, num2) {
  return num1 - num2;
}

export function calculateMul(num1, num2) {
  return num1 * num2;
}

export function calculateDiv(num1, num2) {
  if (num2 === 0) {
    return "0으로 나눌 수 없습니다";
  }
  return num1 / num2;
}
