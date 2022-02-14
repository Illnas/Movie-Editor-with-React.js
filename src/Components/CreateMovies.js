import React, { useEffect, useState, useRef } from "react";

const CreateMovies = () => {
  const [selectedFile, setSelectedFile] = useState();
  const inputFile = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <section className="creation">
      <header>
        <div className="title">
          <h2>Create a new movie</h2>
        </div>
      </header>

      <div className="creation-container">
        <form>
          <div className="image-file" onClick={onButtonClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z"
                fill="white"
              />
            </svg>
            <p>Drop an image here</p>
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />
          </div>
          <div className="right">
            <div className="form-data">
              <input type="text" required placeholder="Title" />
              <input
                maxLength="4"
                type="tel"
                required
                placeholder="Publishing year"
              />
            </div>
            <div className="btns">
              <button type="">Clear</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateMovies;
