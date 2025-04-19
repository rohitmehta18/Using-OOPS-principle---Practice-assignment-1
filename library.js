// Book Class
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isAvailable = true; 
    }
  
    borrowBook() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is currently unavailable.`);
      }
    }
  
    returnBook() {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    }
  }
  
  // User Class
  class User {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      this.borrowedBooks = []; 
    }
  
    borrow(book) {
      if (book.isAvailable) {
        this.borrowedBooks.push(book);
        book.borrowBook(); 
      } else {
        console.log(`${book.title} cannot be borrowed as it's unavailable.`);
      }
    }
  
    return(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        book.returnBook(); 
      } else {
        console.log(`${book.title} is not in your borrowed list.`);
      }
    }
  }
  
  
  

  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084");
  
 
  const user1 = new User("John Doe", 1);
  const user2 = new User("Jane Smith", 2);
  
  
  user1.borrow(book1);
  user2.borrow(book1); 
  user1.return(book1);
  user2.borrow(book1); 
  