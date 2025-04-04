function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  /**
   * 레벨1. 랜덤 색상 생성 (rgb)
   * rgb(r, g, b) 형식으로 색상을 생성합니다.
   * r, g, b는 각각 0-255 사이의 랜덤한 정수입니다.
   * color는 문자열이며, rgb(r, g, b) 형식으로 반환되어야 합니다.
   * 예: rgb(255, 87, 51)
   */
  /**
   * 레벨2.랜덤 색상 생성(hex)
   * HEX 형식으로 색상을 생성합니다.
   * 각 자리 값은 0-9,A-F 사이의 랜덤한 값입니다.
   * 팁1) 0123456789ABCDEF 문자열에서 랜덤한 인덱스를 이용하여 6자리를 만들 수 있습니다.
   * 팁2) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F] 배열을 만들고 랜덤한 인덱스를 이용하여 6자리를 만들 수 있습니다.
   * 팁3) 255 이하의 숫자를 16진수로 변환할 수 있습니다. r, g, b 각가 2자리 16진수로 변환하여 #RRGGBB 형식으로 만들 수 있습니다.
   * color는 문자열이며, #FF5733 형식으로 반환되어야 합니다.`
   * 예: #FF5733
   */
  return color;
}

console.log(getRandomColor());

function getRandomColor2() {
  const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  let color = `#${r}${g}${b}`;
  /**
   * 레벨1. 랜덤 색상 생성 (rgb)
   * rgb(r, g, b) 형식으로 색상을 생성합니다.
   * r, g, b는 각각 0-255 사이의 랜덤한 정수입니다.
   * color는 문자열이며, rgb(r, g, b) 형식으로 반환되어야 합니다.
   * 예: rgb(255, 87, 51)
   */
  /**
   * 레벨2.랜덤 색상 생성(hex)
   * HEX 형식으로 색상을 생성합니다.
   * 각 자리 값은 0-9,A-F 사이의 랜덤한 값입니다.
   * 팁1) 0123456789ABCDEF 문자열에서 랜덤한 인덱스를 이용하여 6자리를 만들 수 있습니다.
   * 팁2) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F] 배열을 만들고 랜덤한 인덱스를 이용하여 6자리를 만들 수 있습니다.
   * 팁3) 255 이하의 숫자를 16진수로 변환할 수 있습니다. r, g, b 각가 2자리 16진수로 변환하여 #RRGGBB 형식으로 만들 수 있습니다.
   * color는 문자열이며, #FF5733 형식으로 반환되어야 합니다.`
   * 예: #FF5733
   */
  return color;
}

console.log(getRandomColor2());
