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
    console.log(`${year}-${month}-${day}`);
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
  ];
  dynamicDropdown("payment-mode", paymentarray);
});

document
  .getElementById("addexpenseForm")
  .addEventListener("submit", function () {
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const payment = document.getElementById("payment-mode").value;
    const location = document.getElementById("location").value;

    const expense = {
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

document.querySelector('.hamburger-icon').addEventListener('click', function () {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = (sidebar.style.display == 'flex') ? 'none' : 'flex';
})
document.getElementById('dashboardpage').addEventListener('click', function () {
    location.href = "./main.html";
  })
