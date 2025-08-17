window.addEventListener("DOMContentLoaded", function () {
  const expense = JSON.parse(this.localStorage.getItem("overallexpense"));
  const table = this.document.getElementById("transaction-history-table");
  if (expense !== null) {
    Object.keys(expense[0]).forEach((key, index) => {
      if (index !== 0) {
        const th = this.document.createElement("th");
        th.textContent = key;
        table.appendChild(th);
      }
    });
    const array = ["edit", "delete"];
    array.forEach((x) => {
      const th = this.document.createElement("th");
      th.textContent = x;
      table.appendChild(th);
    });

    for (let i = 0; i < expense.length; i++) {
      const tr = this.document.createElement("tr");
      Object.values(expense[i]).forEach((value, index) => {
        if (index !== 0) {
          const td = this.document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        }
      });
      //button creation process
      const array = ["edit", "delete"];
      array.forEach((x, index) => {
        const button = this.document.createElement("button");
        const td = this.document.createElement("td");
        if (index == 0) {
          button.textContent = x;
          button.classList.add("edit-btn");
          td.appendChild(button);
          tr.appendChild(td);
        } else {
          button.textContent = x;
          button.classList.add("delete-btn");
          td.appendChild(button);
          tr.appendChild(td);
        }
      });
      table.appendChild(tr);
    }
  } else {
    this.alert("no transaction found");
  }

  //edit button
  const editbuttons = document.querySelectorAll(".edit-btn");
  editbuttons.forEach((button) => {
    button.addEventListener("click", function () {
      const popup = document.querySelector(".popup-box-container");
      popup.style.display = "flex";
      const row = this.closest("tr");
      const rowNumber = row.rowIndex;
      const overallexpenses = JSON.parse(
        localStorage.getItem("overallexpense")
      );
      if (overallexpenses !== null) {
        //we get the expense id here.
        var selectedexpenseId = overallexpenses[rowNumber].expenseid;
        localStorage.setItem("selectedexpenseId", selectedexpenseId);
      }

      const popupcontent = document.querySelector(".pop-up-span");
      if (popupcontent.textContent) {
        popupcontent.textContent = "";
      }
      popupcontent.textContent = "Do you want to edit this record";
    });
  });

  //delete button
  const deletebtn = this.document.querySelectorAll(".delete-btn");
  deletebtn.forEach((button) => {
    button.addEventListener("click", function () {
      const popup = document.querySelector(".popup-box-container");
      popup.style.display = "flex";
      const popupcontent = document.querySelector(".pop-up-span");
      const row = this.closest("tr");
      const rowNumber = row.rowIndex;
      const overallexpense = JSON.parse(localStorage.getItem("overallexpense"));
      const selectedexpenseId = overallexpense[rowNumber].expenseid;
      const localexpenseid = localStorage.getItem("selectedexpenseId");
      if (localexpenseid == null) {
        localStorage.setItem("selectedexpenseId", selectedexpenseId);
      }
      if (popupcontent.textContent) {
        popupcontent.textContent = "";
      }
      popupcontent.textContent = "do you want to delete this record";
    });
  });

  //okay button
  this.document.querySelector(".ok-btn").addEventListener("click", function () {
    const popupcontent = document.querySelector(".pop-up-span");
    const content = popupcontent.textContent;
    if (content === "Do you want to edit this record") {
      alert("visit edit page");
      location.href = "./addexpense.html";
      const selectedexpenseId = localStorage.getItem("selectedexpenseId");
      console.log(selectedexpenseId);
    } else if (content === "do you want to delete this record") {
      const selectedexpenseid = localStorage.getItem("selectedexpenseId");
      let overallexpense = JSON.parse(localStorage.getItem("overallexpense"));
      overallexpense = overallexpense.filter(
        (expense) => expense.expenseid != selectedexpenseid
      );
        localStorage.setItem("overallexpense", JSON.stringify(overallexpense));
        localStorage.removeItem('selectedexpenseId');
        alert("item deleted successfully");
        window.location.href = window.location.href;
        
    }
  });
});

document
  .querySelector(".hamburger-button-container")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".side-bar");
    sidebar.classList.toggle("active");
  });

document.getElementById("dashboardlink").addEventListener("click", function () {
  location.href = "./main.html";
});

document.querySelector(".cancel-btn").addEventListener("click", function () {
  const selectedexpenseId = localStorage.getItem("selectedexpenseId");
  if (selectedexpenseId !== null) {
    localStorage.removeItem("selectedexpenseId");
  }
  const closepopup = document.querySelector(".popup-box-container");
  closepopup.style.display = "none";
});
