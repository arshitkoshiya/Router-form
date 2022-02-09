import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Showdata() {
  const [output, setoutput] = useState([]);
  const navigate = useNavigate();
  const fatchData = () => {axios
    .get("https://61fd0f43f62e220017ce42d5.mockapi.io/Routerform")
    .then((response) => {
      setoutput(response.data);
    });}
  useEffect(() => {
    fatchData();
  }, []);

  const dataDelete = (id) => {
    if (
      window.confirm(
        `please condorm your id for deleting purpose  "Id" : "${id}"`
      )
    ) {
      axios
        .delete(`https://61fd0f43f62e220017ce42d5.mockapi.io/Routerform/${id}`)
        .then(() => {
          fatchData();
          /* navigate("../Showdata"); */
          /* window.location.reload(); */
        });
    }
  };

  /* console.log(userData); */
  const displayData = output.map((data) => {
    let hobbiesData = data.Hobbies;
    let displayHobbies = "";
    Object.keys(hobbiesData).map((key) =>
      hobbiesData[key] === true ? (displayHobbies += key + ", ") : ""
    );
    displayHobbies = displayHobbies.replace(/,\s*$/, "");
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.Fname}</td>
        <td>{data.Lname}</td>
        <td>{data.Age}</td>
        <td>{displayHobbies}</td>
        <td>{data.Gender}</td>
        <td>
          <button
            name="Update"
            id="btn"
            onClick={(e) => navigate(`../Updateform/${data.id}`)}
          >
            Update
          </button>
          {"  "}
          <button
            name="Delete"
            id="btn"
            onClick={(e) => dataDelete(data.id, e)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <td>
              <th>Id</th>
            </td>
            <td>
              <th>Firstname</th>
            </td>
            <td>
              <th>Lastname</th>
            </td>
            <td>
              <th>Age</th>
            </td>
            <td>
              <th>Hobbies</th>
            </td>
            <td>
              <th>Gender</th>
            </td>
            <td>
              <th>Changes</th>
            </td>
          </tr>
          {displayData}
        </table>
      </div>
    </>
  );
}
