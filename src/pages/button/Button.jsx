import { SideBar } from "../../sidebar/SideBar";

import { Button, IconBtn, FloatingBtn } from "./button";

import "./button.css";

export const Buttons = () => {
  return (
    <div className="global-flex-div">
      <SideBar />{" "}
      <div className="button-child-div">
        <div>
          <h2> Button Components </h2>
          <p>
            Button components provide various styles for different actions.{" "}
          </p>
          <div>
            <Button type="primaryBtn"> Primary </Button>
            <Button type="outlineBtn"> Outline </Button>
            <Button type="hoverAndFoucusBtn"> Hover & Foucus </Button>
            <Button type="ghostBtn"> Ghost </Button>
            <Button type="activeBtn"> Active </Button>
            <Button type="linkBtn"> Link </Button>
          </div>

          <div className="howToUse">
            <h2>How to use? </h2>
            <img src="button.svg" alt="badge" />{" "}
          </div>
        </div>
        <div>
          <h2> IconButton Components </h2>
          <p> Icon button components comnine icon and texts. </p>
          <div>
            <IconBtn icon="search"> Search </IconBtn>
            <IconBtn icon="edit"> Edit </IconBtn>
            <IconBtn icon="delete"> Delete </IconBtn>
            <IconBtn icon="add"> Add </IconBtn>
          </div>

          <div className="howToUse">
            <h2>How to use? </h2>
            <img src="iconButton.svg" alt="badge" />{" "}
          </div>
        </div>
        <div>
          <h2> Floating Action Button Components </h2>
          <p>
            Floating action button components provides quick actions for user
            interation.{" "}
          </p>
          <div>
            {" "}
            <FloatingBtn action="search" />
            <FloatingBtn action="edit" />
            <FloatingBtn action="delete" />
            <FloatingBtn action="add" />
          </div>

          <div className="howToUse">
            <h2>How to use? </h2>
            <img src="floatButton.svg" alt="badge" />{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
