class ButtonAccessible {
  constructor(user, pass, loginbtn) {
    this.username = user;
    this.password = pass;
    this.login = loginbtn;
  }

  inputfieldHavefilled() {
    if (
      this.username.value.trim() === "" ||
      this.password.value.trim() === ""
    ) {
      this.login.disabled = true;
    } else {
      this.login.disabled = false;
    }
  }
  accessBtn() {
    this.username.addEventListener("input", () => this.inputfieldHavefilled());
    this.password.addEventListener("input", () => this.inputfieldHavefilled());
  }
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbutton = document.getElementById("loginbtn");
const accessiblebutton = new ButtonAccessible(username, password, loginbutton);
accessiblebutton.accessBtn();


document.getElementById('userform').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const name = localStorage.getItem("username");
  const pass = localStorage.getItem("password");

  if (username !== name && password !== pass) {
    //todo: make a popup appear for invalid username or password.
    const invalidpasswordcontainer = document.querySelector(
      ".invalid-password-container"
    );
    invalidpasswordcontainer.style.display = "flex";
    const span = document.getElementById("dynamic-span-content");
    if (span.textContent) {
      span.textContent = "";
    }
    const closeicon = document.querySelector(".close-icon-container");
    closeicon.style.display = "flex";
    span.textContent = "usernot exists. create account";
  }

  if (username === name && password !== pass) {
    //todo: make a incorrect password box appear.
    const invalidpasswordcontainer = document.querySelector(
      ".invalid-password-container"
    );
    invalidpasswordcontainer.style.display = 'flex';
    const span = document.getElementById("dynamic-span-content");
    if (span.textContent) {
      span.textContent = "";
    }
    const closeicon = document.querySelector(".close-icon-container");
    closeicon.style.display = "flex";
    span.textContent = "Incorrect Password";
  }

  if (username === name && password === pass) {
    //todo: login successfully.
    //todo: need to redirect into another page 

    
    
    const invalidpasswordcontainer = document.querySelector(
      ".invalid-password-container"
    );
    const closeicon = document.querySelector(".close-icon-container");
    closeicon.style.display = "none";
    invalidpasswordcontainer.style.display = "flex";
    const span = document.getElementById("dynamic-span-content");
    if (span.textContent) {
      span.textContent = "";
    }

    span.textContent = "Logged In Successfully";
  }
})


document.querySelector(".okay-btn").addEventListener("click", function () {
  const invalidpasswordcontainer = document.querySelector(
    ".invalid-password-container"
  );
  invalidpasswordcontainer.style.display = "none";
  window.onload;
});
