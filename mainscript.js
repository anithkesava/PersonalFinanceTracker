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

  function makeincomedropdown() {
    const select = document.getElementById("select");
    const primaryincomesource = [
      "select one",
      "employee",
      "business",
      "freelance",
    ];
    primaryincomesource.forEach((x) => {
      const option = document.createElement("option");
      if (x == "select one") {
        option.value = "";
        option.selected = true;
        option.disabled = true;
      } else {
        option.value = x;
      }
      option.textContent = x;
      select.appendChild(option);
    });
  }
  makeincomedropdown();
  function prefilluserdetails() {
    const name = localStorage.getItem("username");
    const email = localStorage.getItem("useremail");

    if (name && email) {
      document.getElementById("username").value = name;
      document.getElementById("useremail").value = email;
    }
  }
  prefilluserdetails();
  function makebusinesstypedropdown() {
    const select = document.getElementById("business-type");
    const businesstype = [
      "select a business type",
      "product",
      "service",
      "both",
    ];
    businesstype.forEach((x) => {
      const option = document.createElement("option");
      option.textContent = x;
      option.value = x == "select a business type" ? "" : x;
      if (option.value == "") {
        option.selected = true;
        option.disabled = true;
      }
      select.appendChild(option);
    });
  }
  makebusinesstypedropdown();
  function makeprimarymarketdropdown() {
    const select = document.getElementById("primary-market");
    const primarymarket = [
      "select a market type",
      "local",
      "national",
      "international",
    ];
    primarymarket.forEach((x) => {
      const option = document.createElement("option");
      option.textContent = x;
      option.value = x == "select a market type" ? "" : x;
      if (option.value == "") {
        option.selected = true;
        option.disabled = true;
      }
      select.appendChild(option);
    });
  }
  makeprimarymarketdropdown();
  function makepaymentmethoddropdown() {
    const select = document.getElementById("payment-method");
    const paymentmethod = [
      "select a payment method",
      "credit card",
      "debit card",
      "google pay",
      "phonepe",
      "paytm",
      "amazon pay",
      "upi",
      "net banking",
      "cash on delivery",
    ];
    paymentmethod.forEach((x) => {
      const option = document.createElement("option");
      option.textContent = x;
      option.value = x == "select a payment method" ? "" : x;
      if (option.value == "") {
        option.disabled = true;
        option.selected = true;
      }
      select.appendChild(option);
    });
  }
  makepaymentmethoddropdown();
});

document
  .getElementById("profile-picture")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".side-bar");
    sidebar.classList.toggle("active");
  });

document.getElementById("select").addEventListener("change", function () {
  const employeecontainer = document.querySelector(
    ".employee-is-a-primary-source"
  );
  const businesscontainer = document.querySelector(
    ".business-is-a-primary-source"
  );
  const freelancecontainer = document.querySelector(
    ".freelance-is-a-primary-source"
  );

  if (this.value == "employee") {
    employeecontainer.style.display = "flex";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "none";
  } else if (this.value == "business") {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "flex";
    freelancecontainer.style.display = "none";
  } else if (this.value == "freelance") {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "flex";
  } else {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "none";
  }
});

document.getElementById("add-user-id").addEventListener("click", function () {
  const adduser = document.querySelector(".add-expense-income");
  const sidebar = document.querySelector(".side-bar");
  adduser.style.display = "flex";
  sidebar.classList.toggle('active');
});
document.getElementById("signout-id").addEventListener("click", function () {
  location.href = "./index.html";
});
document
  .getElementById("business-type")
  .addEventListener("change", function () {
    alert(this.value);
  });

document
  .getElementById("primary-market")
  .addEventListener("change", function () {
    alert(this.value);
  });

document
  .getElementById("payment-method")
  .addEventListener("change", function () {
    alert(this.value);
  });

document
  .getElementById("userinformation")
  .addEventListener("submit", function () {
    alert("form submitted");
  });
