const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener('click', startChangeColor);
refs.btnStop.addEventListener('click', stopChangeColor);

let timerId = null;
refs.btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startChangeColor() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  timerId = setInterval(
    () => (refs.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function stopChangeColor() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(timerId);
  // setTimeout(function () {
  //   location.reload();
  // }, 1000);
}
