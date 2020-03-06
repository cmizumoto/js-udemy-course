class Book {
    constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList (book) {
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

    showAlert (message, className) {
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

    deleteBook (target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields () {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks () {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
    static displayBooks () {
        const books = Store.getBooks();

        books.forEach(book => {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook (book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    
    static removeBook (isbn) {
        const books = Store.getBooks();

        books.forEach(function (book) {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
        
        // add to local storage
        Store.addBook(book);

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

    // Delete book
    ui.deleteBook(event.target);

    // Remove from Local Storage
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);

    // Show message
    ui.showAlert('Book removed', 'success');

    event.preventDefault();
})