import React from "react";
import { Table } from "react-bootstrap";

const Books = ({ books, loading }) => {
  const Loader = () => {
    if (loading) {
      return <h3 className="primary">Loading...</h3>;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Books</h1>
      {Loader()}
      <Table striped bordered hover size="lg" variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Pages</th>
            <th>Book Publication City</th>
            <th>Book Publication Country</th>
            <th>Book Publication Year</th>
          </tr>
        </thead>
        {books.map(book => (
          <tbody key={book.id}>
            <tr>
              <td>{book.id}</td>
              <td>{book.book_title}</td>
              <td>{book.book_author.map(author => author)}</td>
              <td>{book.book_pages}</td>
              <td>{book.book_publication_city}</td>
              <td>{book.book_publication_country}</td>
              <td>{book.book_publication_year}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Books;
