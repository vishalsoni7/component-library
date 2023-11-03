import "./card.css";

export const CardWithBadge = ({ title, badge, content }) => {
  return (
    <div className="cardwithbadge-div">
      <div className="cardwithbadge-span-div">
        {" "}
        <span> {badge} </span>
      </div>
      <h1> {title} </h1>
      <p> {content} </p>
    </div>
  );
};

export const CardsWithDismiss = ({ title, content }) => {
  return (
    <div className="cardsWithDismiss-div">
      <div className="cardsWithDismiss-span-div">
        {" "}
        <span> x </span>
      </div>

      <h1> {title} </h1>
      <p> {content} </p>
    </div>
  );
};

export const CardWithTextOverlayComponent = ({ image, title, content }) => {
  return (
    <div className="cardWithTextOverlayComponent-div">
      <div className="cardWithTextOverlayComponent-img-div">
        <img src={image} alt={image} />
        <div className="cardWithTextOverlayComponent-child-div">
          <h1> {title} </h1>
          <p> {content} </p>
        </div>
      </div>
    </div>
  );
};

export const TextOnlyCard = ({ content }) => {
  return (
    <div className="textOnlyCard">
      <p> {content} </p>
    </div>
  );
};

export const VerticalCard = ({ image, title, content }) => {
  return (
    <div className="verticalCard-div">
      <div className="verticalCard-img-div">
        <img src={image} alt={image} />
      </div>
      <h1> {title} </h1>
      <p> {content} </p>
    </div>
  );
};

export const HorizontalCard = ({ image, title, content }) => {
  return (
    <div className="horizontalCard-div">
      <div className="horizontalCard-img-div">
        <img src={image} alt={image} />
      </div>
      <h1> {title} </h1>
      <p> {content} </p>
    </div>
  );
};

export const BoxShadowCard = ({ image, title, content }) => {
  return (
    <div className="boxShadowCard-div">
      <div className="boxShadowCard-img-div">
        <img src={image} alt={image} />
      </div>
      <h1> {title} </h1>
      <p> {content} </p>
    </div>
  );
};
