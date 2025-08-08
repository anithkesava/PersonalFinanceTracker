function closepopup() {
  const profilepicturepopup = document.querySelector(".profilepicture-upload");
  profilepicturepopup.style.display = "none";
}

function openpopup() {
  const profilepicturepopup = document.querySelector(".profilepicture-upload");
  profilepicturepopup.style.display = "flex";
}

function saveimg() {
  const ispictureexists = localStorage.getItem("profilepicture");
  if (ispictureexists) {
    localStorage.removeItem("profilepicture");
    const profilepicture = document.getElementById("profileimgId");
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
