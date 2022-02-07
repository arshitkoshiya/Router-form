import React from "react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side-buton">
        <ul>
          <li className="Createform">
            <Link to="/Createform">Create Form</Link>
          </li >
          <li className="Showdata">
            <Link to="/Showdata">Show Data</Link>
          </li>
          <li className="Updateform">
            <Link to="/Updateform">Update Form</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
