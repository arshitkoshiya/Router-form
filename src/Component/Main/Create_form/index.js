import axios, { Axios } from "axios";
import React, { useState, useRef } from "react";
import "./index.css";

export default function Createform() {
  const url ="https://61fd0f43f62e220017ce42d5.mockapi.io/Routerform"
  const [User, setUser] = useState({
    Fname: "",
    Lname: "",
    Age: "",
    Gender: "",
    Hobbies: "",
  });

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      Fname : User.Fname,
      Lname : User.Lname,
      Age : User.Age,
      Gender : User.Gender,
      Hobbies : User.Hobbies
    }).then(responce => {
       console.log(responce.User);
    })
  }

  const handleInput = (e) => {
    const newuser = { ...User };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };

  return (
    <>
      <div className="main">
        <div className="form">
          <form action="" method="post" onSubmit={(e) => submit(e)}>
            <div className="fname">
              <b>First Name </b>
              <input
                onChange={handleInput}
                value={User.Fname}
                type="text"
                autoComplete="off"
                name="Fname"
                id="Fname"
                placeholder="First Name"
                required
              />
            </div>
            <br />
            <div className="Lname">
              <b> Last Name </b>
              <input
                onChange={handleInput}
                value={User.Lname}
                type="text"
                autoComplete="off"
                name="Lname"
                id="Lname"
                placeholder="Last Name"
                required
              />
            </div>
            <br />
            <div className="age">
              <b> Age </b>
              <input
                onChange={handleInput}
                value={User.Age}
                type="number"
                autoComplete="off"
                name="Age"
                id="Age"
                placeholder="Age"
                required
              />
            </div>
            <div className="Gender">
              <p>
                {" "}
                <b> Gender</b>
              </p>
              <input
                onChange={handleInput}
                value={User.Gender}
                type="radio"
                name="Gender"
                id="Male"
                checked
              />
              Male
              <input
                onChange={handleInput}
                value={User.Gender}
                type="radio"
                name="Gender"
                id="Female"
              />
              Female
            </div>
            <div className="Hobbies">
              <p>
                {" "}
                <b> Hobbies</b>
              </p>
              <input
                onChange={handleInput}
                value={User.Hobbies}
                type="checkbox"
                name="Hobbies"
                id="Music"
              />
              Music
              <input
                onChange={handleInput}
                value={User.Hobbies}
                type="checkbox"
                name="Hobbies"
                id="Cricket"
              />
              Cricket
              <input
                onChange={handleInput}
                value={User.Hobbies}
                type="checkbox"
                name="Hobbies"
                id="Traveling"
              />
              Traveling
              <input
                onChange={handleInput}
                value={User.Hobbies}
                type="checkbox"
                name="Hobbies"
                id="Swimming"
              />
              Swimming
              <input
                onChange={handleInput}
                value={User.Hobbies}
                type="checkbox"
                name="Hobbies"
                id="reading"
              />
              Reading
            </div>
            <br />
            <center>
              <button type="submit" name="Submit" id="btn">
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
