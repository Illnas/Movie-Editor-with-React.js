import React from 'react';
import "../Web/Empty.css"


const Empty = () => {


  return (
      <section className="emptyList">
          <h1>Your movie list is empty</h1>
          <button>Add a new movie</button>
      </section>
  );
};

export default Empty;
