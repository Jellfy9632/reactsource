import React, { useEffect, useState } from "react";
import { getBook } from "../api/bookApi";
import Loading from "./Loading";

const BookDetail = ({ id }) => {
  const [book, setBook] = useState(null);
  useEffect(() => {
    getBook(id).then((data) => {
      console.log(data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  return (
    <>
      <section className="flex mt-6 p-5 border-t border-neutral-200">
        <div className="first:grow-1">
          <h2 className="text-2xl mb-2.5">{book.title}</h2>
          <p className="my-[5px]">
            <strong>Author : {book.author}</strong>
          </p>
          <p>
            <strong>Genre : {book.genreName}</strong>
          </p>
          <p>
            <strong>Published date : {book.publishedDate}</strong>
          </p>
          <p>
            <strong>Rating : {book.rating}</strong>
            <span></span>
          </p>
          <p>
            <strong>{book.available ? "Available" : "Unavailable"}</strong>
            <span></span>
          </p>
          <div className="text-[8.6em]"></div>
        </div>
      </section>
      <div className="text-center p-2">
        <button
          type="submit"
          className="mx-1 my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700"
        >
          Edit Book
        </button>

        <button
          type="button"
          className="mx-1 my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white rounded-[3px] text-center hover:bg-red-700"
        >
          Delete Book
        </button>
      </div>
    </>
  );
};

export default BookDetail;
