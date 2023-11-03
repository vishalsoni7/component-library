import { SideBar } from "../../sidebar/SideBar";

import { ImageContainer } from "./image";

import "./image.css";

export const Image = () => {
  return (
    <div className="global-flex-div">
      <SideBar />
      <div className="image-child-div">
        <div>
          <h2> Image Component </h2>{" "}
          <p> Image is use to display images support for fallback. </p>
          <ImageContainer img="img.jpg" alt="cv" type="rectangle" />
        </div>

        <div>
          <h2> Round Image Component </h2>
          <p>Round image component is use to display images in round shape. </p>
          <ImageContainer img="moon.jpg" alt="moon" type="round" />
        </div>

        <div className="howToUse">
          <h2 className="h2-margin">How to use? </h2>
          <img src="image.svg" alt="badge" className="alert-use" />{" "}
        </div>
      </div>
    </div>
  );
};
