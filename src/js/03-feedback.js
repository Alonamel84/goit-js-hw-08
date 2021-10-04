import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const addDataToLS = form.addEventListener(
  'input',
  throttle(e => {
    const { message, email } = form.elements;
    const importedData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(importedData));
  }, 500),
);

const inputData = document.querySelector('input');
const messageData = document.querySelector('textarea');
const getItems = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(getItems);

inputData.value = parsedForm.email;
messageData.value = parsedForm.message;

const submitFn = form.addEventListener('submit', e => {
  e.preventDefault();
  const { message, email } = e.currentTarget.elements;
  const importedData = { email: email.value, message: message.value };
  if (email.value !== '' || message.value !== '') {
    console.log(importedData);
    localStorage.clear();
    form.reset();
  }
});
