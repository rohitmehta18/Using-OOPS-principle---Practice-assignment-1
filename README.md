# Library Management System

This project implements a simple library management system using Object-Oriented Programming (OOP) principles in JavaScript.

## Classes and Methods:

1. **Book Class**:
   - `borrowBook()`: Marks the book as unavailable.
   - `returnBook()`: Marks the book as available.

2. **User Class**:
   - `borrow(book)`: Allows a user to borrow a book if available.
   - `return(book)`: Allows a user to return a borrowed book.

## Demo:

The following operations are demonstrated:
- Borrowing and returning books by a user.
- Preventing borrowing of unavailable books.
- Handling the borrowing and returning of books correctly.

## Example Output:

```bash
The Great Gatsby has been borrowed.
To Kill a Mockingbird cannot be borrowed as it's unavailable.
The Great Gatsby has been returned.
To Kill a Mockingbird has been borrowed.
