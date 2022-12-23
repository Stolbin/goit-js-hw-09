import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let delay = Number(refs.delayInput.value);
  let step = Number(refs.stepInput.value);
  let amount = Number(refs.amountInput.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise({ position: i, delay: delay })
      .then(result => Notify.success(result))
      .catch(error => Notify.failure(error));
    delay += step;
  }
    refs.form.reset();
}

function createPromise({ position, delay }) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
