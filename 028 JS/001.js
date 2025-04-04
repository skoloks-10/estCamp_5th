let randomNumber = Math.floor(Math.random() * 10 + 1);
let count = 1;
let guess = parseInt(prompt("1~10사이의 숫자중 정답을 맞춰보세요"));
do {
  if (guess === randomNumber) {
    console.log("정답입니다!");
    console.log(`${count}번 만에 맞췄습니다.`);
    break;
  } else if (guess > randomNumber) {
    console.log("정답보다 큽니다");
    guess = parseInt(prompt("다시 입력하세요 :"));
    count++;
  } else if (guess < randomNumber) {
    console.log("정답보다 작습니다");
    guess = parseInt(prompt("다시 입력하세요 :"));
    count++;
  } else {
    console.log("1~10 사이의 숫자를 입력하세요");
    guess = parseInt(prompt("다시 입력하세요 :"));
    count++;
  }
} while (1);
console.log(`정답은 ${randomNumber}입니다.`);
