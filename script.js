//your JS code here. If required.
const bookList = document.getElementById("book-list");
const form = document.getElementById("form-group");
const submit = document.getElementById("submit");

	submit.addEventListener('click', function() {
      

      // Get values
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const isbn = document.getElementById('isbn').value;

      // Create row
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
      `;

      // Append row to table
      bookList.appendChild(row);

      // Clear form
		 document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";
    });

	bookList.addEventListener("click", function(e) {
      if(e.target.classList.contains("delete")) {
        e.target.closest("tr").remove();
      }
    });