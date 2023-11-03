import { componentArray } from "./component";

import "../components/component.css";
import { NavLink } from "react-router-dom";

export const Components = () => {
  return (
    <div className="component-parent-div">
      <h2> All Components </h2>{" "}
      <div className="component-child-div">
        {componentArray.map((item, i) => (
          <NavLink key={i} className="link" to={`/${item}`}>
            <div className="component-child2-div">
              <p> {item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </div>
          </NavLink>
        ))}{" "}
      </div>
    </div>
  );
};
