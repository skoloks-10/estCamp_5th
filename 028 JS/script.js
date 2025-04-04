const counter = (function () {
  let count = 0;

  return {
    increasement: function () {
      count++;
      console.log(count);
    },
    decreasement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      console.log(count);
    },
  };
})();

counter.getCount(); // 0
counter.increasement(); // 16
counter.increasement(); // 17
counter.decreasement(); // 16
counter.getCount(); // 166
