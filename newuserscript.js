function closepopup() {
  const profilepicturepopup = document.querySelector(".profilepicture-upload");
  profilepicturepopup.style.display = "none";
}

function openpopup() {
  const profilepicturepopup = document.querySelector(".profilepicture-upload");
  profilepicturepopup.style.display = "flex";
}

function saveimg() {
  const input = document.getElementById("fileinput");
  const isselectedfiles = input.files[0];
  if (isselectedfiles) {
    const ispictureexists = localStorage.getItem("profilepicture");
    if (ispictureexists) {
      localStorage.removeItem("profilepicture");
      const profilepicture = document.querySelector(".img-container");
      if (profilepicture) {
        profilepicture.remove();
      }
    }

    const profilecontainer = document.getElementById("profilecontainerid");
    const img = document.createElement("img");
    img.id = "profileimgId";
    const defaulticon = document.getElementById("defaultimg");

    const fileInput = document.getElementById("fileinput");
    const file = fileInput.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (defaulticon) {
          profilecontainer.removeChild(defaulticon);
        }

        localStorage.setItem("profilepicture", e.target.result);
        const updatedimg = localStorage.getItem("profilepicture");
        img.src = updatedimg;
        img.classList.add("img-container");
        profilecontainer.appendChild(img);
        setTimeout(() => {
          closepopup();
        }, 1000);
        alert("profile picture uploaded successfully");
      };
      reader.readAsDataURL(file);
    }
  } else {
    alert("no image has selected");
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const profilephoto = this.localStorage.getItem("profilepicture");
  if (profilephoto) {
    const parentcontainer = this.document.getElementById("profilecontainerid");
    const defaulticon = this.document.getElementById("defaultimg");
    const img = this.document.createElement("img");

    if (defaulticon) {
      parentcontainer.removeChild(defaulticon);
      img.src = profilephoto;
      if (!img.classList.contains("img-container")) {
        img.classList.add("img-container");
        parentcontainer.appendChild(img);
      }
    }
  }
});

function validateAllInputs() {
  const username = document.getElementById("nameinputid").value;
  const emailinput = document.getElementById("mailinput").value;
  const password = document.getElementById("passwordid").value;
  const againpassword = document.getElementById("againpasswordid").value;

  if (!emailinput.trim().endsWith("@gmail.com")) {
    alert("email is invalid");
    return;
  }
  if (password !== againpassword) {
    alert("password should be same");
    return;
  }

  if (username && emailinput && againpassword) {
    localStorage.setItem("username", username);
    localStorage.setItem("useremail", emailinput);
    localStorage.setItem("password", againpassword);
    const accountcreated = document.querySelector(
      ".create-useracount-container"
    );
    accountcreated.style.display = "flex";
  }
}

document.querySelector(".okay-btn").addEventListener("click", function () {
  location.href = "./index.html";
});

document
  .querySelector(".inputs-and-button")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (isUserExists()) {
      alert("username or useremail already exists");
      window.onload();
      return;
    }
    validateAllInputs();
  });

function isUserExists() {
  const username = document.getElementById("nameinputid").value;
  const useremail = document.getElementById("mailinput").value;

  const name = localStorage.getItem("username");
  const email = localStorage.getItem("useremail");

  if (username === name || useremail === email) {
    return true;
  }
  return false;
}

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "flex";
  });

document.querySelector(".close-icon").addEventListener("click", function () {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "none";
});
document
  .getElementById("RemovePicturelink")
  .addEventListener("click", function () {
    if (isprofileExists()) {
      const removeprofilepicture = document.querySelector(
        ".profile-picture-delete-container"
      );
      removeprofilepicture.style.display = "flex";
      return;
    }
    alert("no profile picture exist to remove");
  });

function isprofileExists() {
  const profilepicture = localStorage.getItem("profilepicture");
  if (profilepicture) {
    return true;
  }
  return false;
}

document.querySelector(".ok-icon").addEventListener("click", function () {
  localStorage.removeItem('profilepicture');
  window.onload;

});

document.querySelector('.cancel-icon').addEventListener('click', function () {
  const removeprofilepopup = document.querySelector('.profile-picture-delete-container');
  removeprofilepopup.style.display = 'none';
})
