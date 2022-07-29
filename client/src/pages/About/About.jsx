import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="box">
      <h1>Blog Website on Mern Stack</h1>
      <div className="container">
        <p className="func">Functionalites: </p>
        <ol>
          <li>
            Register user: Register using usename, email, and password which is
            encrypted and stored in the database
          </li>

          <li>Login user: Login facility for registered user</li>

          <li>
            Write Post: Add a post with title and picture associated to it.
          </li>

          <li>See all other posts written by other users on the home page.</li>

          <li>
            Update/ Delete post your posts. (CAN NOT UPDATE POSTS WRITTEN BY
            OTHERS)
          </li>
        </ol>
      </div>
      <div className="name">
        Built By:
        <p>Ayussh Vashishth (2K19/EC/039)</p>
        <p> & Chirag Kaushik (2K19/EC/046) </p>
        <p>DELHI TECHNOLOGICAL UNIVERSITY (FORMERLY DCE)</p>
      </div>
    </div>
  );
}
