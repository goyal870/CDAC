import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import './login.css';
// import Navbar from './Components/Navbar/Navbar'



export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    // event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
    {/* <Navbar /> */}
    <div className="form">

      <form onSubmit={handleSubmit}>
        
        <div className="input-container">
          <label>Username </label>
          <input 
          type="text" 
          name="uname" 
          placeholder=" Username" 
          // onChange={handleChange}
          // value={state.name}
          required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input 
          type="password" 
          name="pass" 
          placeholder=' Password'
          required />
          {renderErrorMessage("pass")}
        </div>
        <div><h4>Don't have an account?</h4><h2><Link to="/signup">Register</Link></h2></div>
        <div className="button-container">
          <input type="submit" />
        </div>

        <h1>@2023 copyright:cdac.in</h1>
      </form>
    </div>
    </>
    
  );

  return (
    
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


// export default Login;