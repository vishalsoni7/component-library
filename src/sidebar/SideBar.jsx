import { componentArray } from "../components/component";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

export const SideBar = () => {
  return (
    <div className="sideBar-parent-div ">
      <p> Navigate </p>
      {componentArray.map((item, i) => (
        <NavLink key={i} className="link" to={`/${item}`}>
          <div className="sideBar-child-div">
            <span> {item.charAt(0).toUpperCase() + item.slice(1)}</span>
          </div>
        </NavLink>
      ))}{" "}
    </div>
  );
};
