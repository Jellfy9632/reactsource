import React from "react";
import InfoCard from "./InfoCard";

const cards = [
  { idx: 1, title: "Props in React", content: "Props pass data from one component to another", author: "Alice" },
  { idx: 2, title: "React Composition", content: "Composition makes your components more reusable", author: "Charlie" },
  { idx: 3, content: "Knowledge is free. We are Anonymous. Expect Us." },
  { idx: 4, title: "Christmas Gift Card", content: "Merry Christmas Ho-ho-ho", author: "Santa Claus" },
];

const Card = () => {
  return (
    <>
      {cards.map((card) => (
        <InfoCard key={card.id} title={card.title} content={card.content} author={card.author} />
      ))}
    </>
  );
};

export default Card;
