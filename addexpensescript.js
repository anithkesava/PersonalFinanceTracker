window.addEventListener("DOMContentLoaded", function () {
  const dateinput = this.document.getElementById("date");
  function chooseCurrentMonth() {
    const today = new Date();
    const firstdate = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastdate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    dateinput.setAttribute("min", formatDates(firstdate));
    dateinput.setAttribute("max", formatDates(lastdate));
  }
  chooseCurrentMonth();
  function formatDates(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  //dynamic: selectId, array,
  function dynamicDropdown(id, array) {
    const select = document.getElementById(id);

    array.forEach((x, i) => {
      const option = document.createElement("option");
      option.textContent = x;
      if (i === 0) {
        option.value = "";
        option.selected = true;
        option.disabled = true;
      } else {
        option.value = x;
      }
      select.appendChild(option);
    });
  }
  const catergoryarray = [
    "Select a Category",
    "Essential Living",
    "Transportation",
    "Foods and Drinks",
    "Health and Wellness",
    "Shopping",
    "Entertainment",
    "Finance",
    "Travel",
    "Miscellaneous",
  ];
  dynamicDropdown("category", catergoryarray);
  const paymentarray = [
    "Select a Payment Mode",
    "Debit Card",
    "Credit Card",
    "Bank Transfer",
    "Cheque",
    "UPI",
    "Mobile Wallet",
    "Internet Banking",
    "Cash"
  ];
  dynamicDropdown("payment-mode", paymentarray);

  //redirection part.
  const selectedexpenseid = this.localStorage.getItem("selectedexpenseId");
  if (selectedexpenseid !== null) {
    const overallexpense = JSON.parse(
      this.localStorage.getItem("overallexpense")
    );
    for (let expense of overallexpense) {
      if (expense.expenseid == selectedexpenseid) {
        document.getElementById("date").value = expense.expensedate;
        document.getElementById("description").value =
          expense.expensedescription;
        document.getElementById("category").value = expense.expensecategory;
        document.getElementById("price").value = expense.expenseprice;
        document.getElementById("payment-mode").value = expense.expensepayment;
        document.getElementById("location").value = expense.expenselocation;
      }
    }
    this.document.getElementById("addExpenseBtn").textContent = "Save Expense";
  }
});

//addexpense form:
document
  .getElementById("addexpenseForm")
  .addEventListener("submit", function () {
    //save expense logic.
    const expenseBtn = document.getElementById("addExpenseBtn");
    if (expenseBtn.textContent == "Save Expense") {
      //replace the value in the localstorage object.
      const selectedexpenseId = localStorage.getItem("selectedexpenseId");
      const overallexpense = JSON.parse(localStorage.getItem("overallexpense"));
      for (let expense of overallexpense) {
        if (expense.expenseid == selectedexpenseId) {
          expense.expensedate = document.getElementById("date").value;
          expense.expensedescription =
            document.getElementById("description").value;
          expense.expensecategory = document.getElementById("category").value;
          expense.expenseprice = document.getElementById("price").value;
          expense.expensepayment =
            document.getElementById("payment-mode").value;
          expense.expenselocation = document.getElementById("location").value;
        }
      }
      expenseBtn.textContent = "Add Expense";
      localStorage.setItem("overallexpense", JSON.stringify(overallexpense));
      localStorage.removeItem("selectedexpenseId");
      alert("expense updated successfully");
      return;
    }

    const expenseid = Date.now();
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const payment = document.getElementById("payment-mode").value;
    const location = document.getElementById("location").value;

    const expense = {
      expenseid: expenseid,
      expensedate: date,
      expensedescription: description,
      expensecategory: category,
      expenseprice: price,
      expensepayment: payment,
      expenselocation: location,
    };
    console.log(expense);
    const overallexpense =
      JSON.parse(localStorage.getItem("overallexpense")) || [];
    overallexpense.push(expense);
    localStorage.setItem("overallexpense", JSON.stringify(overallexpense));

    alert("expense added");
  });

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = sidebar.style.display == "flex" ? "none" : "flex";
  });

document.getElementById("dashboardpage").addEventListener("click", function () {
  location.href = "./main.html";
});

document
  .getElementById("viewtransactionpage")
  .addEventListener("click", function () {
    location.href = "./transactionhistory.html";
  });
