window.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const username = localStorage.getItem("username");
  const h1 = document.createElement("h1");
  const strong = this.document.createElement("strong");
  h1.textContent = "Hello, ";
  strong.textContent = username;
  header.appendChild(h1);
  header.appendChild(strong);

  function getCalendarInfo() {
    const calendarDay = document.querySelector(".calendar-info");
    const today = new Date();
    const currentdate = today.toString().split(" ");
    calendarDay.textContent = `${currentdate[0]}, ${currentdate[1]} ${currentdate[2]}, ${currentdate[3]}`;
  }
  getCalendarInfo();

  function getCurrentMonthName() {
    const today = new Date();
    const month = today.toDateString().split(" ");
    const monthname = month[1];
    const year = month[3];
    const currentMonth = monthname + "-" + year;
    const monthSpan = document.getElementById("getCurrentMonth");
    monthSpan.textContent = currentMonth;
    monthSpan.classList.add("current-month-span");
  }
  getCurrentMonthName();
  function getCurrentMonthIncome() {
    const primaryincomedetails = localStorage.getItem(
      "primarysource-information"
    );
    const currentMonthIncome = JSON.parse(primaryincomedetails);
    if (currentMonthIncome.montlysalary !== null) {
      const income = document.getElementById("getIncome");
      income.textContent = currentMonthIncome.montlysalary;
      income.classList.add("current-month-span");
    }
  }
  getCurrentMonthIncome();

  function getExpenses() {
    const expensespan = document.getElementById("getExpense");
    const overallexpenses = JSON.parse(localStorage.getItem("overallexpense"));
    let totalexpense = 0;
    for (let expense of overallexpenses) {
      totalexpense += parseInt(expense.expenseprice);
    }
    expensespan.classList.add("current-month-span");
    expensespan.textContent = totalexpense;
    localStorage.setItem("totalexpense", totalexpense);
  }
  getExpenses();
  function getBalance() {
    const span = document.getElementById("getBalance");
    span.classList.add("current-month-span");
    const totalexpense = localStorage.getItem("totalexpense");
    const income = document.getElementById("getIncome").textContent;

    span.textContent = parseInt(income) - parseInt(totalexpense);
  }
  getBalance();
  function getFewTransactionTableData() {
    const table = this.document.getElementById("few-transaction-history-table");
    const expenses = JSON.parse(localStorage.getItem("overallexpense"));
    if (expenses !== null) {
      //for table columns.
      Object.keys(expenses[0]).forEach((key) => {
        if (key !== "expenseid") {
          const th = document.createElement("th");
          th.textContent = key;
          table.appendChild(th);
        }
      });

      //for table rows.
      for (let i = 0; i < expenses.length; i++) {
        const tr = document.createElement("tr");
        Object.values(expenses[i]).forEach((value, index) => {
          if (index !== 0) {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
          }
        });
        table.appendChild(tr);
      }
    } else {
      alert("no transaction found");
    }
  }
  getFewTransactionTableData();
  const title = this.document.getElementById("titleId");
  const category = this.document.getElementById("categoryId");

  const userprimarydetails = JSON.parse(
    localStorage.getItem("primarysource-information")
  );
  if (userprimarydetails !== null) {
    title.textContent = userprimarydetails.title;
    category.textContent = userprimarydetails.category;
  }
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
  const today = new Date().toISOString().split("T")[0];
  const dateinput = document.getElementById("dob");
  dateinput.setAttribute("max", today);
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

  const source = localStorage.getItem("primarysource");
  const primarysourcedetails = localStorage.getItem(
    "primarysource-information"
  );
  const userdetails = localStorage.getItem("userinfo");
  if (
    source !== null &&
    primarysourcedetails !== null &&
    userdetails !== null
  ) {
    document.querySelector(".savebtn").textContent = "close";
  } else {
    document.querySelector(".savebtn").textContent = "save";
  }

  //here we need to fill the all input fields if they already filled by the user.
  const userinfo = localStorage.getItem("userinfo");
  if (typeof userinfo === "string") {
    //we need to retrieve the value and assign that to respective input fields.
    const user = JSON.parse(userinfo);
    const ids = ["phone", "dob"];
    ids.forEach((id) => {
      this.document.getElementById(id).readOnly = true;
    });
    document.getElementById("phone").value = user.mobile;
    document.getElementById("dob").value = user.dateofbirth;
    const primarysource = this.localStorage.getItem("primarysource");
    if (primarysource !== null) {
      document.getElementById("select").value = primarysource;
      this.document.getElementById("select").disabled = true;
    }
  }
  //now we need the dynamic box's content needs to be appear based on the primary income source.
  const primarysource = this.localStorage.getItem("primarysource");
  const employeecontainer = document.querySelector(
    ".employee-is-a-primary-source"
  );
  const businesscontainer = document.querySelector(
    ".business-is-a-primary-source"
  );
  const freelancecontainer = document.querySelector(
    ".freelance-is-a-primary-source"
  );
  if (primarysource === "employee") {
    employeecontainer.style.display = "flex";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "none";

    const employee = localStorage.getItem("primarysource-information");
    const employeedetails = JSON.parse(employee);

    const inputIds = [
      "companyname",
      "designation",
      "ctc",
      "montlysalary",
      "bonus",
    ];
    inputIds.forEach((id) => {
      document.getElementById(id).readOnly = true;
    });
    document.getElementById("companyname").value = employeedetails.title;
    document.getElementById("designation").value = employeedetails.category;
    document.getElementById("ctc").value = employeedetails.ctc;
    document.getElementById("montlysalary").value =
      employeedetails.montlysalary;
    document.getElementById("bonus").value = employeedetails.montlybonus;
  } else if (primarysource === "business") {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "flex";
    freelancecontainer.style.display = "none";

    const business = this.localStorage.getItem("primarysource-information");
    const businessdetails = JSON.parse(business);

    const ids = [
      "businessname",
      "business-type",
      "industry",
      "years",
      "employeecount",
      "business-monthly-income",
      "primary-market",
    ];
    ids.forEach((id) => {
      this.document.getElementById(id).readOnly = true;
    });
    document.getElementById("businessname").value = businessdetails.title;
    if (businessdetails.businesstype != null) {
      document.getElementById("business-type").value = businessdetails.category;
      document.getElementById("business-type").disabled = true;
      document.getElementById("business-type").style.cursor = "not-allowed";
    }
    document.getElementById("industry").value = businessdetails.industryname;
    document.getElementById("years").value = businessdetails.yearsofoperation;
    document.getElementById("employeecount").value =
      businessdetails.employeecount;
    document.getElementById("business-monthly-income").value =
      businessdetails.montlysalary;
    if (businessdetails.primarymarket != null) {
      document.getElementById("primary-market").value =
        businessdetails.primarymarket;
      document.getElementById("primary-market").disabled = true;
      document.getElementById("primary-market").style.cursor = "not-allowed";
    }
  } else if (primarysource === "freelance") {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "flex";

    const freelancedetails = localStorage.getItem("primarysource-information");
    const freelance = JSON.parse(freelancedetails);

    const Ids = [
      "freelanceservice",
      "freelanceexperience",
      "freelancemontlysalary",
      "clientname",
      "payment-method",
      "working-plaftform",
    ];
    Ids.forEach((id) => {
      this.document.getElementById(id).readOnly = true;
    });

    document.getElementById("freelanceservice").value = freelance.title;
    document.getElementById("freelanceexperience").value =
      freelance.freelanceexperience;
    document.getElementById("freelancemontlysalary").value =
      freelance.montlysalary;
    document.getElementById("clientname").value = freelance.freelanceclient;
    if (document.getElementById("payment-method").value !== null) {
      document.getElementById("payment-method").value = freelance.paymentmethod;
      document.getElementById("payment-method").disabled = true;
      document.getElementById("payment-method").style.cursor = "not-allowed";
    }
    document.getElementById("working-plaftform").value = freelance.category;
  }
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
  //required input fields.
  const employeeinputs = document.querySelectorAll(".employee-input");
  const businessinputs = document.querySelectorAll(".business-input");
  const freelanceinputs = document.querySelectorAll(".freelance-input");

  if (this.value == "employee") {
    employeecontainer.style.display = "flex";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "none";
    //Employee Required Fields.
    for (let inputs of employeeinputs) {
      inputs.required = true;
    }
    businessinputs.forEach((x) => {
      x.required = false;
    });
    freelanceinputs.forEach((x) => {
      x.required = false;
    });
  } else if (this.value == "business") {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "flex";
    freelancecontainer.style.display = "none";
    //Business Required Fields
    for (let inputs of employeeinputs) {
      inputs.required = false;
    }
    businessinputs.forEach((x) => {
      x.required = true;
    });
    freelanceinputs.forEach((x) => {
      x.required = false;
    });
  } else if (this.value == "freelance") {
    employeecontainer.style.display = "none";
    businesscontainer.style.display = "none";
    freelancecontainer.style.display = "flex";
    //FreeLance Required Fields
    for (let inputs of employeeinputs) {
      inputs.required = false;
    }
    businessinputs.forEach((x) => {
      x.required = false;
    });
    freelanceinputs.forEach((x) => {
      x.required = true;
    });
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
  sidebar.classList.toggle("active");
});
document.getElementById("signout-id").addEventListener("click", function () {
  location.href = "./index.html";
});

//save button function.
document
  .getElementById("userinformation")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const popup = document.querySelector(".add-expense-income");
    const btn = document.querySelector(".savebtn");
    if (btn.textContent.toLowerCase() == "close") {
      popup.style.display = "none";
      return;
    }

    const username = document.getElementById("username").value;
    const useremail = document.getElementById("useremail").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    const userinfo = {
      name: username,
      email: useremail,
      mobile: phone,
      dateofbirth: dob,
    };

    const primarysource = document.getElementById("select").value;
    console.log("primary source: " + primarysource);

    if (primarysource === "employee") {
      const cname = document.getElementById("companyname").value;
      const designation = document.getElementById("designation").value;
      const ctc = document.getElementById("ctc").value;
      const montlysalary = document.getElementById("montlysalary").value;
      const bonus = document.getElementById("bonus").value;

      let incomesourcedata = {
        title: cname,
        category: designation,
        ctc: ctc,
        montlysalary: montlysalary,
        montlybonus: bonus == "" ? 0 : bonus,
      };
      //make sure whether the primary of income is also selected.
      const incomealreadyexists = localStorage.getItem(
        "primarysource-information"
      );
      if (typeof incomealreadyexists === "string") {
        alert("you already choose an primary income");
        popup.style.display = "none";
        return;
      } else {
        localStorage.setItem("primarysource", primarysource);
        localStorage.setItem(
          "primarysource-information",
          JSON.stringify(incomesourcedata)
        );
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        alert("employee details saved");
        popup.style.display = "none";
        return;
      }
    } else if (primarysource === "business") {
      const bname = document.getElementById("businessname").value;
      const btype = document.getElementById("business-type").value;
      const industry = document.getElementById("industry").value;
      const years = document.getElementById("years").value;
      const ecount = document.getElementById("employeecount").value;
      const salary = document.getElementById("business-monthly-income").value;
      const market = document.getElementById("primary-market").value;

      let incomesourcedata = {
        title: bname,
        category: btype,
        industryname: industry,
        yearsofoperation: years,
        employeecount: ecount,
        montlysalary: salary,
        primarymarket: market,
      };
      const primaryincomedetails = localStorage.getItem(
        "primarysource-information"
      );
      if (typeof primaryincomedetails === "string") {
        alert("you already choose an primary income");
        popup.style.display = "none";
        return;
      } else {
        localStorage.setItem("primarysource", primarysource);
        localStorage.setItem(
          "primarysource-information",
          JSON.stringify(incomesourcedata)
        );
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        alert("business details saved");
        popup.style.display = "none";
        return;
      }
    } else if (primarysource === "freelance") {
      const service = document.getElementById("freelanceservice").value;
      const experience = document.getElementById("freelanceexperience").value;
      const salary = document.getElementById("freelancemontlysalary").value;
      const client = document.getElementById("clientname").value;
      const paymentmode = document.getElementById("payment-method").value;
      const workingplatform =
        document.getElementById("working-plaftform").value;

      let incomesourcedata = {
        title: service,
        freelanceexperience: experience,
        montlysalary: salary,
        freelanceclient: client,
        paymentmethod: paymentmode,
        category: workingplatform,
      };
      const primaryincomedetails = localStorage.getItem(
        "primarysource-information"
      );
      if (typeof primaryincomedetails === "string") {
        alert("you already choose an primary income");
        popup.style.display = "none";
        return;
      } else {
        localStorage.setItem("primarysource", primarysource);
        localStorage.setItem(
          "primarysource-information",
          JSON.stringify(incomesourcedata)
        );
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        alert("freelance details saved");
        popup.style.display = "none";
        return;
      }
    } else {
    }
  });

//add-expense-button
document
  .querySelector(".add-expense-button")
  .addEventListener("click", function () {
    location.href = "./addexpense.html";
  });

//transaction history button
document
  .querySelector(".transaction-history-button")
  .addEventListener("click", function () {
    location.href = "./transactionhistory.html";
  });
document.querySelector(".view-more-btn").addEventListener("click", function () {
  location.href = "./transactionhistory.html";
});
