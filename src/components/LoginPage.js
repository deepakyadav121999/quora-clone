import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginPage.css"

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users)
    const userMatch = users.find((u) => u.username === username && u.password === password);
    if (userMatch) {
      navigate("/home");
    } else {
      window.alert("Invalid username or password.");
    }
  };

  return (
    <>
      <div className="lrty">
    <div className="big-container">
 
 <div className="hddmange">
 <h1>Quora</h1>
        <p>A place to share knowledge and better understand the world</p>
 </div>
 <div className="flxmanage">
      <div className="left-container">
        <p className="pgtxt">By continuing you indicate tha you agree to Quora's Terms of Service and Privacy Policy.</p>
        <Link to="/registration"> <button className="emdli">Continue with Gmail</button></Link>
       
      </div>
    <div className="container">
      <p  className="movhdr">Login</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input className="p_cont"type="text" value={username} onChange={handleUsername}  placeholder="enter your username"/>
        </label>
   
        <label>
          Password
          <input className="p_cont"type="password" value={password} onChange={handlePassword} placeholder="enter your password"/>
        </label>
       
        <button type="submit">Login</button>
     
      </form>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default LoginPage;
