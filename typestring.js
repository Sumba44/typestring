function typeString(selector, value, seconds, delay) {
  let el = document.querySelector(selector);
  let word = "";
  let char = "";

  setTimeout(function () {
    for (let i = 0; i <= value.length; i++) {
      setTimeout(function timer() {
        char = word + value.charAt(i);
        el.innerText = char;
        word = char;
      }, i * seconds);
    }
  }, delay);
}
