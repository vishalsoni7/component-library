import { NavLink } from "react-router-dom";
import "../home/home.css";

export const Home = () => {
  return (
    <div className="home-parent-div">
      {" "}
      <h2 className="landing-heading"> A component library</h2>{" "}
      <p>
        Your one-stop solution for an array of versatile and customizable UI
        components, designed to simplify and enhance your web development
        projects.{" "}
      </p>
      <button>
        <NavLink
          style={{ color: " whitesmoke" }}
          className="link"
          to="/components"
        >
          {" "}
          Get Started{" "}
        </NavLink>{" "}
      </button>
    </div>
  );
};
