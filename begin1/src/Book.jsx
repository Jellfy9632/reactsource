import React from "react";

const books = [
  { id: 1, title: "React Basic", published: true, publisher: "Manning" },
  { id: 2, title: "Advnced hooks", published: false, publisher: "Oreilly" },
  { id: 3, title: "JSX in Depth", published: true, publisher: "Packt" },
];

// books 배열에서 published == true 추출

const published = books.filter((book) => book.published);

// 참 : 0 제외 숫자. 'ans' [],{}
// 거짓 : 0 ,' ', null ,undefined,NaN

const Book = () => {
  return (
    <div>
      {published.length > 0 && <h2>Published Books</h2>}
      {published.length ? (
        published.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em>- {book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No Published books found</p>
      )}
    </div>
  );
};

export default Book;
