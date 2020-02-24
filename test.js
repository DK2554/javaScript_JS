const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multi: function(a, b) {
    return a * b;
  },
  divsion: function(a, b) {
    return a / b;
  }
};
const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multi = calculator.multi(5, 5);
const divsion = calculator.divsion(5, 5);
console.log(plus, minus, multi, divsion);
