function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = { add, isEven, reverseString };