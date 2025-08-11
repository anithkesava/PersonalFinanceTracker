window.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const username = localStorage.getItem("username");

  const h1 = document.createElement("h1");
  const strong = this.document.createElement("strong");
  h1.textContent = "Hello, ";
  strong.textContent = username;
  header.appendChild(h1);
  header.appendChild(strong);

  const profile = document.getElementById("profile-picture");
  const profilepicture = localStorage.getItem("profilepicture");
  if (!profilepicture) {
    const imgcontainer = document.querySelector(".defaulticon");
    const defaulticon = document.createElement("i");
    defaulticon.classList.add("fa-solid fa-user user-icon");
    imgcontainer.appendChild(defaulticon);
  } else {
    const img = document.getElementById("profile-picture");
    img.src = profilepicture;
  }
});
