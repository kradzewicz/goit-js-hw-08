import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const txtareaMsg = document.querySelector('[name="message"]');

function formSave() {
  const email = inputEmail.value.trim();
  const message = txtareaMsg.value.trim();
  const formData = {
    email,
    message,
  };

  const formState = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formState);
}

const throttledFormSave = throttle(formSave, 500);
form.addEventListener('input', throttledFormSave);

inputEmail.value = `${
  JSON.parse(localStorage.getItem('feedback-form-state')).email
}`;
txtareaMsg.value = `${
  JSON.parse(localStorage.getItem('feedback-form-state')).message
}`;

function formSubmit(event) {
  event.preventDefault();

  if (inputEmail.value.trim() === '' || txtareaMsg.value.trim() === '') {
    alert('Please fullfill both fields!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  inputEmail.value = ``;
  txtareaMsg.value = ``;
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('submit', formSubmit);
