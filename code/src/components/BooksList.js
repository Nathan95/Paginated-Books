import React, { useState, useEffect } from "react";

import queryString from "query-string";
import Books from "./Books";
import Pagination from "./Pagination";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import { Container } from "react-bootstrap";

const BooksList = () => {
  const location = useLocation();
  const history = useHistory();
  const path = window.location.pathname;
  const url = queryString.parse(location.search);
  const pageNo = Number(url.page) || 1;

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(pageNo);
  const [booksPerPage, setBooksPerPage] = useState(5);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.post("http://nyx.vima.ekt.gr:3000/api/books");

        setBooks(res.data.books);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
        setBooks([]);
      }
    };

    fetchBooks();
    //handle url
    history.push(`${path}?page=${currentPage}`);
  }, [currentPage, history, path]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (error) return <div>Error message</div>;

  return (
    <Container>
      <Books books={currentBooks} loading={loading} />
      <Pagination
        booksPerPage={booksPerPage}
        booksAmount={books.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default BooksList;
