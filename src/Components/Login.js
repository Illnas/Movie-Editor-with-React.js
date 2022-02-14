import React from "react";


const Login = ({ beforeLoginRef, afterLoginRef, setUsername, setPassword }) => {
  
  let pass = "";
  let userName = "";
  
  const Login = (e) => {
    e.preventDefault()
    beforeLoginRef.current.style.display = "none";
    afterLoginRef.current.style.display = "none";
/*     console.log(pass, userName)
    setPassword(pass)
    setUsername(userName) */

  };

  const onPasswordChange = (e) => {
    pass = `${e.target.value}`
  }

  const onUsernameChange = (e) => {
    userName = `${e.target.value}`
  }


  return (
    <section className="login-layout" ref={beforeLoginRef}>
      <div className="login">
        <div className="login-container">
          <h1>Sign in</h1>
          <form action="#">
            <input type="email" name="email" id="email" placeholder="Email"  onChange={(e) => onUsernameChange(e)}/>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => onPasswordChange(e)}
            />
            <div className="checkbox">
              <div className="checkboxBg">
                <input type="checkbox" name="remember" id="remember" />
              </div>

              <label htmlFor="remember">Remember me!</label>
            </div>
            <button type="submit" onClick={(e) => Login(e)}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
