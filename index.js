function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}

function multiplier(a, b) {
  return a * b;
}

