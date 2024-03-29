// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI () {}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');
    
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function (message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    ui.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function (){
        document.querySelector('.alert').remove();
    }, 3000)
}

// Delete book
UI.prototype.deleteBook = function (target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(event){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate a book
    const book = new Book(title, author, isb);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);
        
        // show Success
        ui.showAlert('Book added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    event.preventDefault();
});

// Event listener for Delete
document.getElementById('book-list').addEventListener('click', function (event) {

    // instantiate UI
    const ui = new UI();

    ui.deleteBook(event.target);

    // Show message
    ui.showAlert('Book removed', 'success');

    event.preventDefault();
})