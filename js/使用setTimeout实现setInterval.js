function _setInterval(fn, delay) {
  let timer = {
    flag: true,
  };

  function interval() {
    if (timer.flag) {
      fn();

      setTimeout(interval, delay);
    }
  }

  setTimeout(interval, delay);

  return timer;
}

console.log(
  _setInterval(() => {
    console.log(1);
  }, 1000)
);
