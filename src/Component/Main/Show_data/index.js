import React, { useEffect, useState } from "react";
import './index.css'
import axios from 'axios'

export default function Showdata() {
  const [output, setoutput] = useState([]);
  useEffect(() => {
		axios.get(
			"https://61fd0f43f62e220017ce42d5.mockapi.io/Routerform"
		).then((response) => {
			setoutput(response.data);
		});
	}, []);

	/* console.log(userData); */
	const displayData = output.map((data) => {
		return (
			<tr>
				<td>{data.id}</td>
				<td>{data.Fname}</td>
				<td>{data.Lname}</td>
				<td>{data.Age}</td>
				<td>{data.Hobbies}</td>
				<td>{data.Gender}</td>
			</tr>
		);
	});
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <td>Id</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Age</td>
            <td>Hobbies</td>
            <td>Gender</td>
          </tr>
          {displayData}
        </table>
      </div>
    </>
  );
}
