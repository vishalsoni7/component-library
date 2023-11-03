import { SideBar } from "../../sidebar/SideBar";

import {
  Badges,
  AvatarWthBedgeWithRoundCorder,
  AvatarWthBedgeWithOutRoundCorder
} from "./badge";

import "./badge.css";

export const Badge = () => {
  return (
    <div className="badge-parent-div">
      {" "}
      <SideBar />{" "}
      <div className="badge-child-div">
        <h2> Badge Component </h2>
        <p>
          The Badge component is used to highlight and display short
          information, labels, or status.{" "}
        </p>

        <div className="badge-child-div-2">
          <Badges type="defalutBadge" status="Defalut" />
          <Badges type="successBadge" status="Sucess" />
          <Badges type="removedBadge" status="Remove" />
          <Badges type="newBadge" status="New" />
          <Badges type="hoverBorderBadge" status="Hover Me" />
          <Badges type="shadowBadge" status="Shadow Badge" />
          <Badges type="hoverShadowBadge" status="Hover Shadow Badge" />
        </div>

        <div className="badge-child-div-3">
          <h2> AvatarWithDadge component </h2>
          <p>
            The AvatarWithDadge component is used to highlight and display short
            information, labels, or status on user profile and card.
          </p>

          <div className="baege-avatar-div">
            {" "}
            <AvatarWthBedgeWithRoundCorder image="me.JPG" alt="me" badge="💭" />
            <AvatarWthBedgeWithOutRoundCorder
              image="me.JPG"
              alt="me"
              badge="💭"
            />{" "}
          </div>
        </div>
        <div className="howToUse">
          <h2>How to use? </h2>
          <img src="badge.svg" alt="badge" />{" "}
        </div>
      </div>
    </div>
  );
};
