function Robot(menu) {
  this.menu = function () {
    menu = Math.random() * menu.length;
    menu = Math.floor(menu);
    console.log(`음식: ${menuList[menu]}`);
  };
}

const menuList = [
  "햄버거",
  "피자",
  "스파게티",
  "치킨",
  "초밥",
  "돈까스",
  "샐러드",
  "국수",
  "떡볶이",
  "김밥",
];

const robot = new Robot(menuList);
robot.menu();
