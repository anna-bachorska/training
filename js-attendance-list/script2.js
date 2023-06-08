const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const githubInput = document.querySelector("#github");
const formAttendance = document.querySelector(".formAttendance");

nameInput.classList.remove("nameInput");
surnameInput.classList.remove("surnameInput");
githubInput.classList.remove("githubInput");

//validation
function checkIsOnlyLettersName(text) {
  const regEx = new RegExp(/^[a-zA-Z]+$/);
  return text.match(regEx);
}

function checkIsOnlyLettersSurname(text) {
  const regEx = new RegExp(/^([a-zA-Z])+(-)?([a-zA-Z])+$/);
  return text.match(regEx);
}

const MIN_LENGTH = 3;
const MAX_LENGTH = 50;

function nameValidation() {
  const nameValue = nameInput.value;
  const nameLength = nameValue.length;

  if (nameLength < MIN_LENGTH) {
    document.getElementById("nameValidationMessage").innerHTML =
      "Your name is too short*";
    nameInput.classList.add("nameInput");
    return false;
  } else if (nameLength > MAX_LENGTH) {
    document.getElementById("nameValidationMessage").innerHTML =
      "Your name is too long*";
    nameInput.classList.add("nameInput");
    return false;
  } else if (!checkIsOnlyLettersName(nameValue)) {
    document.getElementById("nameValidationMessage").innerHTML =
      "You used invalid characters*";
    nameInput.classList.add("nameInput");
    return false;
  } else {
    document.getElementById("nameValidationMessage").innerHTML = "";
    nameInput.classList.remove("nameInput");
    return true;
  }
}

function surnameValidation() {
  const surnameValue = surnameInput.value;
  const surnameLength = surnameValue.length;

  if (surnameLength < MIN_LENGTH) {
    document.getElementById("surnameValidationMessage").innerHTML =
      "Your surname is too short*";
    surnameInput.classList.add("surnameInput");
    return false;
  } else if (surnameLength > MAX_LENGTH) {
    document.getElementById("surnameValidationMessage").innerHTML =
      "Your surname is too long*";
    surnameInput.classList.add("surnameInput");
    return false;
  } else if (!checkIsOnlyLettersSurname(surnameValue)) {
    document.getElementById("surnameValidationMessage").innerHTML =
      "You used invalid characters*";
    surnameInput.classList.add("surnameInput");
    return false;
  } else {
    document.getElementById("surnameValidationMessage").innerHTML = "";
    surnameInput.classList.remove("surnameInput");
    return true;
  }
}

function githubValidation() {
  const githubValue = githubInput.value;
  const githubLength = githubValue.length;

  if (githubLength < MIN_LENGTH) {
    document.getElementById("githubValidationMessage").innerHTML =
      "Your github is too short*";
    githubInput.classList.add("githubInput");
    return false;
  } else if (githubLength > MAX_LENGTH) {
    document.getElementById("githubValidationMessage").innerHTML =
      "Your github is too long*";
    githubInput.classList.add("githubInput");
    return false;
  } else {
    document.getElementById("githubValidationMessage").innerHTML = "";
    githubInput.classList.remove("githubInput");
    return true;
  }
}

nameInput.addEventListener("change", nameValidation);
surnameInput.addEventListener("change", surnameValidation);
githubInput.addEventListener("change", githubValidation);

function allInputsValidation() {
  let nameValidationValue = nameValidation();
  let surnameValidationValue = surnameValidation();
  let githubValidationValue = githubValidation();
  if (nameValidationValue && surnameValidationValue && githubValidationValue) {
    document.getElementById("nameValidationMessage").innerHTML = "";
    document.getElementById("surnameValidationMessage").innerHTML = "";
    document.getElementById("githubValidationMessage").innerHTML = "";
    nameInput.classList.remove("nameInput");
    surnameInput.classList.remove("surnameInput");
    githubInput.classList.remove("githubInput");
    return true;
  } else {
    return false;
  }
}

//fetch POST
const URL =
  "https://pxia4wkbor5nqoq3yx3njuvfc40qkcfa.lambda-url.us-east-1.on.aws/";

formAttendance.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!allInputsValidation()) {
    return;
  }

  let bodyValue = JSON.stringify({
    name: nameInput.value,
    surname: surnameInput.value,
    github: githubInput.value,
  });
  console.log(bodyValue);

  // getAndShowAttendanceList()
  fetch(URL, {
    mode: "no-cors",
    method: "POST",
    body: bodyValue,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      console.log(res);
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("github").value = "";
      showToastSuccess(); // show success toast
      getAndShowAttendanceList(); // call GET
    })
    .catch((err) => {
      console.error(err);
      showToastFailure(); // show error toast
    });
});

const URL_GET =
  "https://ipcl32yuj4hzjss4l6yek7prt40wopeg.lambda-url.us-east-1.on.aws/";

// fetch GET
const getAndShowAttendanceList = () => {
  fetch(URL_GET, {
    method: "GET",
  })
    .then((res) => {
      res.json().then((data) => {
        console.log("*** data:" + JSON.stringify(data));
        showAttendanceList(data.body); //show page with results
      });
    })
    .catch((err) => {
      console.error(err);
      showToastFailure(); // show error toast
    });
};

//show page with results
const attendanceList = document.querySelector(".attendanceListContainer");
attendanceList.classList.remove("attendanceListContainer");
let attendanceListNested;

const showAttendanceList = (users) => {
  if (attendanceListNested) {
    attendanceList.removeChild(attendanceListNested);
  }

  attendanceList.classList.add("attendanceListContainer");
  attendanceListNested = document.createElement("div");
  attendanceList.appendChild(attendanceListNested);

  const h2 = document.createElement("h2");
  attendanceListNested.appendChild(h2);
  h2.innerHTML = "Attendance List";
  h2.classList.add("ul");

  for (let i = 0; i < users.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `name: ${users[i].name}, github: ${users[i].github}`;
    attendanceListNested.appendChild(li);
    li.classList.add("li");
  }
};

// show toast
let toastBox = document.querySelector(".toastBox");

const showToastSuccess = () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add("toastSuccess");
  toast.innerHTML = "Success";
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000);
};

const showToastFailure = () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add("toastFailure");
  toast.innerHTML = "Failure";
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000);
};
