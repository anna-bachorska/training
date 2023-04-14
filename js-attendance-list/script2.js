const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const nickInput = document.querySelector("#nick");


firstNameInput.classList.remove('firstnameInput');
lastNameInput.classList.remove('lastnameInput');
nickInput.classList.remove('nickInput');

function checkIsOnlyLettersFirstName(text) {
  const regEx = new RegExp(/^[a-zA-Z]+$/);
  return text.match(regEx);
}

function checkIsOnlyLettersLastName(text) {
  const regEx = new RegExp(/^([a-zA-Z])+(-)?([a-zA-Z])+$/);
  return text.match(regEx);
}

  const MIN_LENGTH = 3;
  const MAX_LENGTH = 50;
  
  function firstNameValidation() {
    const firstNameValue = firstNameInput.value;
    const firstNameLength = firstNameValue.length;

    if (firstNameLength < MIN_LENGTH) {
      document.getElementById('result').innerHTML="Your first name is too short*";
      firstNameInput.classList.add('firstnameInput');
    } else if (firstNameLength > MAX_LENGTH) {
      document.getElementById('result').innerHTML="Your first name is too long*";
      firstNameInput.classList.add('firstnameInput');
    } else if (!checkIsOnlyLettersFirstName(firstNameValue))  {
      document.getElementById('result').innerHTML="You used invalid characters*";
      firstNameInput.classList.add('firstnameInput');
    } else {
      document.getElementById('result').innerHTML="";
      firstNameInput.classList.remove('firstnameInput');
    }
  }  

  function lastNameValidation() {
    const lastNameValue = lastNameInput.value;
    const lastNameLength = lastNameValue.length;

    if (lastNameLength < MIN_LENGTH) {
      document.getElementById('result').innerHTML="Your last name is too short*";
      lastNameInput.classList.add('lastnameInput');
    } else if (lastNameLength > MAX_LENGTH) {
      document.getElementById('result').innerHTML="Your last name is too long*";
      lastNameInput.classList.add('lastnameInput');
    } else if (!checkIsOnlyLettersLastName(lastNameValue))  {
      document.getElementById('result').innerHTML="You used invalid characters*";
      lastNameInput.classList.add('lastnameInput');
    } else {
      document.getElementById('result').innerHTML="";
      lastNameInput.classList.remove('lastnameInput');
    }
  }  

  function nickValidation() {
    const nickValue = nickInput.value;
    const nickLength = nickValue.length;

    if (nickLength < MIN_LENGTH) {
      document.getElementById('result').innerHTML="Your nick is too short*";
      nickInput.classList.add('nickInput');
    } else if (nickLength > MAX_LENGTH) {
      document.getElementById('result').innerHTML="Your nick is too long*";
      nickInput.classList.add('nickInput');
    } else {
      document.getElementById('result').innerHTML="";
      nickInput.classList.remove('nickInput');
    }
  }  


  firstNameInput.addEventListener("change", firstNameValidation);
  lastNameInput.addEventListener("change", lastNameValidation);
  nickInput.addEventListener("change", nickValidation);
