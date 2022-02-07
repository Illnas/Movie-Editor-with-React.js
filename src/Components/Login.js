import React from "react";
import "../Web/Login.css";


const Login = ({ beforeLoginRef, afterLoginRef}) => {
    const Login = () => {
            beforeLoginRef.current.style.display = "none";
            afterLoginRef.current.style.display = "flex"   
    }


  return (
    <section className="login" ref={beforeLoginRef}>
      <h1>Sign in</h1>
      <form action="#">
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <div className="checkbox">
          <div className="checkboxBg">
           <input type="checkbox" name="remember" id="remember" />   
          </div>
          
          <label htmlFor="remember">Remember me!</label>
        </div>
        <button type="submit" onClick={() => Login()}>Login</button>
      </form>
    </section>
  );
};

export default Login;
