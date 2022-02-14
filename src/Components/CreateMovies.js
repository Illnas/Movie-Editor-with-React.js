import React, { useEffect, useState, useRef, useCallback } from "react";

const CreateMovies = () => {
  const [imgData, setImgData] = useState([]);
  const inputFile = useRef(null);
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState([])
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    /*Selected files data can be collected here.*/
    if (e.target.files[0]) {

      console.log(e.target.files[0]);
      setData(e.target.files[0]);
      console.log(typeof data)
      setTextInput({"name": "Wall-E", "publicationYear": 2008})
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;
    var formdata = new FormData();
    formdata.append("data", "");
    formdata.append("files.poster", data, "jpeg");

    const requestOptions = {
      method: "POST",
      body: formdata,
      headers: { Authorization: `Bearer ${localStorage.token}` },
      redirect: "follow",
    };

    // update state
    setIsSending(true);
    // send the actual request

    try {
      fetch(
        "https://zm-movies-assignment.herokuapp.com/api/movies",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log("error", error);
    }

    // once the request is sent, update state again
    if (isMounted.current)
      // only update if we are still mounted
      setIsSending(false);
  }, [isSending]); // update the callback if the state changes

  /*   useEffect(() => {
      const fetchData = async () => {
        var formdata = new FormData();
        formdata.append("data", "");
        formdata.append("files.poster", inputFile.files[0], "file");

        const requestOptions = {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.token}` },
          redirect: "follow",
        };

        try {
          setLoading(true);
          const response = await fetch(
            "https://zm-movies-assignment.herokuapp.com/api/auth/local",
            requestOptions
          );
          const json = await response.json();
          localStorage.setItem("token", json.jwt)
          setLoading(false);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }, []); */

  return (
    <section className="creation">
      <header>
        <div className="title">
          <h2>Create a new movie</h2>
        </div>
      </header>

      <div className="creation-container">
        <form action="#">
          <div className="image-file" type="file" onClick={onBtnClick}>
            <img
              src={imgData}
              alt="Girl in a jacket"
              width="500"
              height="600"
            />
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
              ref={inputFileRef}
              onChange={onFileChange}
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
              <button type="submit" disabled={isSending} onClick={sendRequest}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateMovies;
