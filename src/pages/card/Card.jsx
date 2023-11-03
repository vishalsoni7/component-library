import {
  CardWithBadge,
  CardsWithDismiss,
  CardWithTextOverlayComponent,
  TextOnlyCard,
  VerticalCard,
  HorizontalCard,
  BoxShadowCard
} from "./card";

import { SideBar } from "../../sidebar/SideBar";

export const Card = () => {
  return (
    <div className="card-parent-div">
      <SideBar />

      <div className="card-child-div">
        <div className="card-global-div">
          {" "}
          <h2> CardWithBadge Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <CardWithBadge
            badge="New"
            title="Title"
            content="Card content with badge."
          />{" "}
        </div>{" "}
        <div className="card-global-div">
          <h2> CardsWithDismiss Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <CardsWithDismiss
            title="Title"
            content="Card content with dismiss."
          />
        </div>
        <div className="card-global-div">
          <h2> CardWithTextOverlayComponent Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <CardWithTextOverlayComponent
            image="./img.jpg"
            title="Overlay Title"
            content="Card content with text overlay."
          />
        </div>
        <div className="card-global-div">
          <h2> TextOnlyCard Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <TextOnlyCard content="Card content with text only." />
        </div>
        <div className="card-global-div">
          <h2> VerticalCard Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <VerticalCard
            image="./img2.jpg"
            title="Vertical card title"
            content="Vertical card content."
          />
        </div>
        <div className="card-global-div">
          <h2> HorizontalCard Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <HorizontalCard
            image="./img3.jpg"
            title="Horizontal card title"
            content="Horizontal card content."
          />
        </div>
        <div className="card-global-div">
          <h2> BoxShadowCard Components </h2>
          <p>
            {" "}
            Card is a flexible component used to group and display content and
            concise format.
          </p>
          <BoxShadowCard
            image="./img4.jpg"
            title="Box shadow card title"
            content="Box shadow card content."
          />
        </div>
        <div className="howToUse">
          <h2>How to use? </h2>
          <img src="card.svg" alt="badge" />{" "}
        </div>
      </div>
    </div>
  );
};
