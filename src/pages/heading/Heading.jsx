import { SideBar } from "../../sidebar/SideBar";

import "./heading.css";

export const Heading = () => {
  return (
    <div className="global-flex-div">
      {" "}
      <SideBar />
      <div className="heading-child-div">
        <h2> Heading Component </h2>{" "}
        <p> Heading is use to render semanttic HTML heading elements. </p>
        <div className="heading-child-div-2">
          <h1> h1. CSS Gems heading </h1>
          <h2> h2. CSS Gems heading </h2>
          <h3> h1. CSS Gems heading </h3>
          <h4> h1. CSS Gems heading </h4>
          <h5> h1. CSS Gems heading </h5>
          <h6> h1. CSS Gems heading </h6>
        </div>
        <div className="howToUse">
          <h2>How to use? </h2>
          <img src="heading.svg" alt="badge" />{" "}
        </div>
      </div>
    </div>
  );
};
