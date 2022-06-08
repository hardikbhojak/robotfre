import React from "react";
const Card = ({ id, name, email }) => {
  let a = id % 9;
  if (a === 0) {
    a = a + 5;
  }
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${a}?set=set2&size=180x180`}
        alt="Robots"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
