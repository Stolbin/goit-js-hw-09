import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'npm i notiflix/build/notiflix-notify-aio';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  buttonStartTimer: document.querySelector('[data-start]'),
  selectData: document.querySelector('#datetime-picker'),
};

const DELAY_INTERVAL = 1000;
let intervalId = null;
let selectedTimeInMs = null;
let objectTime = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  parseDate: true,
  onClose: function (selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Choose a date or time in the future!');
      refs.buttonStartTimer.setAttribute('disabled', true);
    } else {
      refs.buttonStartTimer.removeAttribute('disabled');
      selectedTimeInMs = Date.parse(selectedDates) - Date.now();
      objectTime = convertMs(selectedTimeInMs);
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(refs.selectData, options);

refs.buttonStartTimer.addEventListener('click', onStartTimer);

function onStartTimer(selectedDates) {
  refs.buttonStartTimer.setAttribute('disabled', true);
  refs.selectData.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    if (selectedTimeInMs <= 0) {
      refs.buttonStartTimer.removeAttribute('disabled');
      refs.selectData.removeAttribute('disabled');
      clearInterval(intervalId);
      return;
    }
    objectTime = convertMs(selectedTimeInMs);
    refs.days.textContent = addLeadingZero(objectTime.days);
    refs.hours.textContent = addLeadingZero(objectTime.hours);
    refs.selectData.textContent = addLeadingZero(objectTime.minutes);
    refs.seconds.textContent = addLeadingZero(objectTime.seconds);
    selectedTimeInMs -= DELAY_INTERVAL;
  }, DELAY_INTERVAL);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
