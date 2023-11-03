import { SideBar } from "../../sidebar/SideBar";

import { Avatar } from "./Avatar";
import "./avatar.css";

export const Avatars = () => {
  return (
    <div className="avatar-parent-div">
      <SideBar />

      <div className="avatar-child-div">
        <h2> Avatar Component </h2>
        <p>
          {" "}
          The Avatar component display an image represting a user or entity,
          along with a name.{" "}
        </p>

        <div className="avatar-child-div-2">
          <Avatar image="img5.webp" alt="img4.jpg" size="xs" />
          <Avatar image="img5.webp" alt="img4.jpg" size="sm" />
          <Avatar image="img5.webp" alt="img4.jpg" size="md" />
          <Avatar image="img5.webp" alt="img4.jpg" size="lg" border={3} />
        </div>
        <div className="howToUse">
          <h2 className="h2-margin"> How to use? </h2>
          <img src="avatar.svg" alt="avatar use" />
        </div>
      </div>
    </div>
  );
};
