//selects the list items with class .student-item
const allStudents = document.querySelectorAll(".student-item");
const studentDetails = document.querySelectorAll(".student-details");

let ul = document.getElementsByTagName("ul")[0];
const paginationDiv = ul.parentNode;
const div = document.createElement("div");
const createUl = document.createElement("ul");
const createLi = document.createElement("li");

function showPage(pageNumber, allStudents) {
  const upperIndex = pageNumber * 10 - 1;
  const lowerIndex = pageNumber * 10 - 10;
  for (let i = 0; i < allStudents.length; i++) {
    allStudents[i].style.display = "none";
    if (i >= lowerIndex && i <= upperIndex) {
      allStudents[i].style.display = "block";
    }
  }
}
//pass the function 2 arguments. 1 for the page and the other is the students
showPage(1, allStudents);

function appendPageLinks(allStudents) {
  paginationDiv.appendChild(div).className = "pagination";
  const pagination = document.getElementsByClassName("pagination")[0];
  pagination.appendChild(createUl);
  for (let i = 0; i <= allStudents.length / 10; i++) {
    createLi.classList.add("paging");
    createUl.appendChild(createLi);
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    createLi.appendChild(a);
    a.textContent = [i + 1];
    if (i === 0) {
      a.classList.add("active");
    }
  }
  function paginationEventListener() {
    pagination.addEventListener("click", event => {
      const anchorTags = document.querySelectorAll(".pagination a");
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].classList.remove("active");
      }
      if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
      } else {
        event.target.className = "active";
        console.log(event.target);
      }

      function buttonNumber() {
        const button = parseInt(event.target.textContent);
        showPage(button, allStudents);
      }
      buttonNumber();
    });
  }
  paginationEventListener();
}

appendPageLinks(allStudents);

//Exceeds

function searchBar() {
  let paging = document.getElementsByClassName("paging");

  //create a div append a div with class name student-search
  function createDiv() {
    const div = document.createElement("div");
    const h2 = document.querySelector("h2").parentNode;
    h2.appendChild(div).className = "student-search";
    const studentSearch = document.getElementsByClassName("student-search")[0];
  }

  function createInput() {
    const studentSearch = document.getElementsByClassName("student-search")[0];
    const createInput = document.createElement("input");
    createInput.placeholder = "Search for students...";
    studentSearch.appendChild(createInput);
  }

  function createButton() {
    const studentSearch = document.getElementsByClassName("student-search")[0];
    const button = document.createElement("button");
    studentSearch.appendChild(button);
    button.textContent = "Search";
  }

  //search a students name
  createDiv();
  createInput();
  createButton();

  const studentSearch = document.getElementsByClassName("student-search")[0];
  const input = document.querySelector("input");

  let test1 = studentSearch.addEventListener("keyup", e => {
    function searchStudentEmail() {
      const paging = document.querySelector("li.paging");
      if (paging) {
        paging.parentNode.removeChild(paging);
      }

      let filter = input.value.toUpperCase();
      ul = document.getElementsByClassName("student-list")[0];
      li = ul.getElementsByClassName("student-item cf");
      for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("email")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
          //  paging[i].style.display = "none";
        }
      }
    }
    searchStudentEmail();

    // function searchPaginationLinks(){
    //     let s = [];
    //     for(let value of yes){
    //         if(value.charAt(0) == "b")
    //         s.push(value);
    //         console.log(value);
    //     }
    // }
    // searchPaginationLinks()
  });
}

searchBar();

// let shoppingList = ["apples", "butter", "bread", "candy", "pizza", "beer", "eggs", "bacon",
//   "tomatoes", "milk", "bananas"];

// let bItems = [];

// for(let item of shoppingList) {
//   if(item.charAt(0) == "b") {
//     bItems.push(item);
//   }
// }

// function printItems(list) {
//   for(let item of list) {
//     console.log(item);
//   }
// }

// console.log("Whole shopping list: ---");
// printItems(shoppingList);
// console.log("Only items that begin with the letter b: ");
// printItems(bItems);
