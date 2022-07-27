// here we used context api , to the information of current user, to display in home and every other page

import { useContext, useRef } from "react";
import "./login.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context); // dispatch is used to send the action type to the reducer, where it will update the state. we can also access user state

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" }); // after clicking it will start the LOGIN_START action and it will set the state according to the reducer
    try {
      const res = await axios.post("/auth/login", {
        // this is the req object we are sending to the api to find the user.
        username: userRef.current.value, // userRef.current = the input tag of the username, .value is the value we enter.
        password: passwordRef.current.value,
      });
      // if we get the res => successfull
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); // adding a payload as the fetched user because we defined in the reducer to update state.
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" }); // if its in catch => there is error => dispatched accordingly
    }
  };

  // console.log(user); // problem, the user we get will be set to null everytime we reload. => do changes in Context.js, ie we are gonna save the user in local storage.
  // console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button
          className="loginButton"
          onClick={handleClick}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
