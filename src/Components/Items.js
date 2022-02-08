import React from "react";


const Items = () => {
  return (
    <section className="items">
        <header>
          <div className="left">
            <h2>My movies</h2>
            
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3334 7.33332H12.6667V12.6667H7.33342V15.3333H12.6667V20.6667H15.3334V15.3333H20.6667V12.6667H15.3334V7.33332ZM14.0001 0.666656C6.64008 0.666656 0.666748 6.63999 0.666748 14C0.666748 21.36 6.64008 27.3333 14.0001 27.3333C21.3601 27.3333 27.3334 21.36 27.3334 14C27.3334 6.63999 21.3601 0.666656 14.0001 0.666656ZM14.0001 24.6667C8.12008 24.6667 3.33341 19.88 3.33341 14C3.33341 8.11999 8.12008 3.33332 14.0001 3.33332C19.8801 3.33332 24.6667 8.11999 24.6667 14C24.6667 19.88 19.8801 24.6667 14.0001 24.6667Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="right">
            <p>Logout</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6667 6.66667L16.7867 8.54667L18.8933 10.6667H8V13.3333H18.8933L16.7867 15.44L18.6667 17.3333L24 12L18.6667 6.66667ZM2.66667 2.66667H12V0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H12V21.3333H2.66667V2.66667Z"
                fill="white"
              />
            </svg>
          </div>
        </header>

        <div className="item-container">
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src={require("../Images/image.jpg")} alt="img" />
            </div>
            <div className="text">
              <h6> Movie 1</h6>
              <p>2021</p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <a href="!#" className="prev">
            Prev
          </a>
          <ul className="pagination">
            <li key="1" className="page-item">
              <a href="!#" className="page-link">
                1
              </a>
            </li>
            <li key="2" className="page-item">
              <a href="!#" className="page-link">
                1
              </a>
            </li>
          </ul>
          <a href="!#" className="next">
            Next
          </a>
        </footer>

    </section>
  );
};

export default Items;
