// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const year = document.getElementById("year");
// const bookList = document.getElementById("book-list");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (title.value == "" && author.value == "" && year.value == "") {
//     alert("Fill The Form");
//   } else {
//     const newRow = document.createElement("section");

//     // Creating new Title
//     const newTitle = document.createElement("div");
//     newTitle.innerHTML = title.value;
//     newRow.appendChild(newTitle);

//     // Creating new Author
//     const newAuthor = document.createElement("div");
//     newAuthor.innerHTML = author.value;
//     newRow.append(newAuthor);

//     // Creating new Year
//     const newYear = document.createElement("div");
//     newYear.innerHTML = year.value;
//     newRow.appendChild(newYear);

//     bookList.appendChild(newRow);
//   }
// });



const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value === "" || author.value === "" || year.value === "") {
    alert("Fill The Form");
  } else {
    const newRow = document.createElement("section");
    newRow.classList.add("book-entry");

    // Creating new Title
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new Author
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new Year
    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Creating Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    newRow.appendChild(deleteBtn);

    // Adding Delete Functionality
    deleteBtn.addEventListener("click", function () {
      bookList.removeChild(newRow);
    });

    bookList.appendChild(newRow);

    // Clearing the input fields after adding the book
    title.value = "";
    author.value = "";
    year.value = "";
  }
});
