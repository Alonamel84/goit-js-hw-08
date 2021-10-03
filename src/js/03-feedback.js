import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const addDataToLS = form.addEventListener(
  'input',
  throttle(e => {
    const { message, email } = form.elements;
    // console.log(email.value);
    const importedData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(importedData));
  }, 500),
);
// form.addEventListener('input', throttle(addDataToLS, 500));

form.addEventListener('submit', e => {
  e.preventDefault();
  const { message, email } = e.currentTarget.elements;
  const importedData = { email: email.value, message: message.value };
  if (email.value !== '' || message.value !== '') {
    console.log(importedData);
    localStorage.clear();
    form.reset();
  }
});
