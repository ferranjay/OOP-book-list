class Book {
    constructor (title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // create tr element
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = `
        <td>${book.title}<td>
        <td>${book.author}<td>
        <td>${book.isbn}<td>
        <td><a href="#" class="delete">X<a><td>`;

        list.appendChild(row);

    }

    showAlert(message, className){
        // create a div
        const div = document.createElement('div');
        // add classes 
        div.className = `alert ${className}`;
        // add text 
        div.appendChild(document.createTextNode(message));
        // get parent 
        const container = document.querySelector('.container');
        // get the form
        const form = document.querySelector('#book-form');
        // insert alert
        container.insertBefore(div, form);

        // timeout after 3 secondens
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleleteBook(target){
        if(target.className === 'delete'){
        // parent reversing deleting the right DOM part
        target.parentElement.parentElement.remove();}
    }

    clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }
}


// Event Listener for adding a  book
document.getElementById('book-form').addEventListener('submit', 
function(e){
    // get form values (inputs)
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // instantiate book , making a new variable with the given inputs
    const book = new Book(title, author, isbn);
    
    // instantiate UI 
    const ui = new UI();

    // validate
    if (title === '' || author === '' || isbn === '') {
       // test first by alert('failed');
    // error alert 
    ui.showAlert('please fill in all fields', 'error');
    } else {

    // add book to list 
    ui.addBookToList(book);

    // show success
    ui.showAlert('book added!', 'success');
    
    // clear fields
    ui.clearfields();

    }
    
    e.preventDefault();
});


// Event listener for deleting a book
document.getElementById('book-list').addEventListener(`click`, function(e){

    // instantiate UI 
    const ui = new UI();

    ui.deleteBook(e.target);

    // show alert
    ui.showAlert('book has been removed', 'remove');

    e.preventDefault();
});