
let reset = function(event) {
  event.preventDefault();
  document.getElementById('form-user').reset();
};

let validate = function() {
  let failures = [];
  let first = document.getElementById('input-first');
  let password = document.getElementById('input-password');
  let email = document.getElementById('input-email');
  let age = document.getElementById('input-age');
  let alive = document.getElementById('input-alive');
  if (first.value === '') {
    failures.push({
      inputId: 'input-first',
      msg: 'Required field'
    });
  }
  if (password.value === '' || password.value.length < 8) {
    failures.push({
      inputId: 'input-password',
      msg: 'Must be at least 8 characters'
    });
  }
  if (email.value === '' || !email.value.includes('@')) {
    failures.push({
      inputId: 'input-email',
      msg: 'Required field'
    });
  }
  if (age.selectedIndex === 0) {
    failures.push({
      inputId: 'input-age',
      msg: 'Too young...'
    });
  }
  if (!alive.checked) {
    failures.push({
      inputId: 'input-alive',
      msg: 'Must be alive to submit form'
    });
  }
  return failures;
};

let send = function(event) {
  let allFormBoxes = document.getElementsByClassName('form-box');
  for (let i = 0; i < allFormBoxes.length; i++) {
    allFormBoxes[i].classList.remove('error');
    allFormBoxes[i].setAttribute('data-errormsg', '');
  }
  event.preventDefault();
  event.stopPropagation();
  let failures = validate();
  if (failures.length === 0) {
    document.getElementById('form-user').submit();
  } else {
    failures.forEach(object => {
      let field = document.getElementById(object.inputId);
      field.parentElement.classList.add('error');
      field.parentElement.setAttribute('data-errormsg', object.msg);
    });
  }
};

let init = function() {
  // debugger;
  document.getElementById('button-cancel').addEventListener('click', reset);
  document.getElementById('button-send').addEventListener('click', send);
};

document.addEventListener('DOMContentLoaded', init);