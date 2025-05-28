import React from "react";
import BookDetail from "./../components/BookDetail";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  // /edit/321
  // 경로에 있는 아이디를 가져와야 함
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-[32px]">Book Details</h1>
      <BookDetail id={id} />
    </div>
  );
};

export default BookDetails;
