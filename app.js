// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;    
}


// UI Constructor
function UI(){
}

// Add book to list 
UI.prototype.addBookToList = function(book){
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

// clear fields
UI.prototype.clearfields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
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
    
    // add book to list 
    ui.addBookToList(book);
    
    // clear fields
    ui.clearfields();
    
    e.preventDefault();
});



// 1.   we create the constructors which we are going to need

// 2.   the book constructor will handle creating the actual book object

// 3.   the UI constructor will be a set of propotype methods to do things like, add book to the list, delete , show the alert.. things that need to do with the UI

// 4.   create the book function , which will take in title, author & isbn
//      this.title = title which is being passed in 
//      this.author = author "
//      this.isbn = isbn "

// 5.   create the UI constructor function , we wont pass anything in here ...beacuse everything else will be inside the prototype

// 6.   create event listeners, we want to listen to the DOM objects in the HTML and therefore make certain things happen 
//      we start with the whole section which is the book-form and in there we want to listen for submit
//      document.getElementById('book-form")   
//      we add an eventListener to this part as we want to listen for a submit to add information

//      document.getElementById('book-form") add.EventListener('submit, 
//      function(e){
//      what do we want to happen??  we want to take the input fields of the form and save the input into variables
//      const title = document.GetElementById('title').value,
//            author = document.GetElementById('author').value,
//            isbn = document.GetElementById('isbn').value
//
//      when the input fields have been filled in and submitted we want to create a new variable in which we save the information
//      const book = new Book(title, author, isbn);
//
//      after this we want to be able to add a book to the table and in order for us to do this we need to initiate/create a new variabele to hold this new UI part
//      const ui = new UI();
//
//      add book to list 
//      ui.addBookToList(book);
// 
//      e.preventDefault();                 we add this to stop the initual behaviour after pressing the submit
//
// 7.   Under the function we create a prototype to handle the book adding process
//      this function will take in the book object
//      UI.prototype.addBookToList = function(book){
//      const list = document.GetElementbyId('book-list');
//
//      after this we create an element
//      UI.prototype.addBookToList = function(book){
//      const list = document.GetElementbyId('book-list');
//      const row = document.createElement('tr');
//      
// 8.   after this we want to take the ('tr') and append html into it 
//      const row = document.createElement('tr');
//      row.innerHTML = `
//      <td>${book.title}<td>
//      <td>${book.author}<td>
//      <td>${book.isbn}<td>
//      <td><a href="#" class="delete">X<a><td>`;
//
//      list.appendChild(row);
//
// 9.   After the book has been added to the list we want to clear the input fields again in order for a new inpput
//      UI.prototype.clearFields = function (){
//      document.getElementById('title').value = '';
//      document.getElementById('author').value = '';
//      document.getElementById('isbn').value = '';
//      }