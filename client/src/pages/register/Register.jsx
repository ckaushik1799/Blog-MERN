import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEamil] = useState("");
  const [error, setError] = useState(false);
  // defining history
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault(); // to stop reloading of the page after submiting
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        // this is how you send a req body using axios.
        username,
        email,
        password,
      });

      res.data && history.push("/login"); // successfully register => redirect to login page.
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEamil(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">Login</button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
