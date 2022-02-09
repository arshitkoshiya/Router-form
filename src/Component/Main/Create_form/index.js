import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Createform() {
  const url = "https://61fd0f43f62e220017ce42d5.mockapi.io/Routerform";
  /*  const [Submit , setSubmit] = useState(true); */
  const [User, setUser] = useState({
    Fname: "",
    Lname: "",
    Age: "",
    Gender: "",
    Hobbies: {
      Music: false,
      Cricket: false,
      travelling: false,
      Reading: false,
      Swimming: false,
    },
  });
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        Fname: User.Fname,
        Lname: User.Lname,
        Age: User.Age,
        Gender: User.Gender,
        Hobbies: User.Hobbies,
      })
      .then((responce) => {
        navigate("/Showdata");
        /* window.location.href = "../Showdata"; */
      });
  }

  const radioandcheck = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      const Hobbies = { ...User.Hobbies };
      Hobbies[name] = event.target.checked;
      setUser((prevState) => ({ ...prevState, Hobbies }));
    } else {
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <>
      <div className="main">
        <div className="form">
          <form action="" method="post" onSubmit={(e) => submit(e)}>
            <div className="fname">
              <b>First Name </b>
              <input
                onChange={radioandcheck}
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
                onChange={radioandcheck}
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
                onChange={radioandcheck}
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
                onChange={radioandcheck}
                value="Male"
                type="radio"
                name="Gender"
                id="Male"
                checked={User.Gender === "Male" ? true : false}
              />
              Male
              <input
                onChange={radioandcheck}
                value="Female"
                type="radio"
                name="Gender"
                id="Female"
                checked={User.Gender === "Female" ? true : false}
              />
              Female
            </div>
            <div className="Hobbies">
              <p>
                {" "}
                <b> Hobbies</b>
              </p>
              <input
                onChange={radioandcheck}
                value="Music"
                type="checkbox"
                name="Music"
                id="Music"
                checked={User.Hobbies.Music}
              />
              Music
              <input
                onChange={radioandcheck}
                value="Cricket"
                type="checkbox"
                name="Cricket"
                id="Cricket"
                checked={User.Hobbies.Cricket}
              />
              Cricket
              <input
                onChange={radioandcheck}
                value="travelling"
                type="checkbox"
                name="travelling"
                id="Traveling"
                checked={User.Hobbies.travelling}
              />
              Traveling
              <input
                onChange={radioandcheck}
                value="Swimming"
                type="checkbox"
                name="Swimming"
                id="Swimming"
                checked={User.Hobbies.Swimming}
              />
              Swimming
              <input
                onChange={radioandcheck}
                value="Reading"
                type="checkbox"
                name="Reading"
                id="Reading"
                checked={User.Hobbies.Reading}
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
