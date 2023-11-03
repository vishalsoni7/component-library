import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

export const Button = ({ type, children }) => {
  let buttonStyles = `button-${type}`;
  return (
    <>
      <button className={`button ${buttonStyles}`}> {children} </button>
    </>
  );
};

export const IconBtn = ({ icon, children }) => {
  let showIcon;
  let btnStyle = `btn-${icon}`;

  if (icon === "search") {
    showIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  } else if (icon === "edit") {
    showIcon = <FontAwesomeIcon icon={faPenToSquare} />;
  } else if (icon === "delete") {
    showIcon = <FontAwesomeIcon icon={faTrash} />;
  } else if (icon === "add") {
    showIcon = <FontAwesomeIcon icon={faPlus} />;
  }

  return (
    <>
      <button className={`btn ${btnStyle}`}>
        {showIcon} {children}{" "}
      </button>{" "}
    </>
  );
};

export const FloatingBtn = ({ action }) => {
  let floatIcon;
  let floatStyle = `float-${action}`;

  if (action === "search") {
    floatIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  } else if (action === "edit") {
    floatIcon = <FontAwesomeIcon icon={faPenToSquare} />;
  } else if (action === "delete") {
    floatIcon = <FontAwesomeIcon icon={faTrash} />;
  } else if (action === "add") {
    floatIcon = <FontAwesomeIcon icon={faPlus} />;
  }

  return (
    <>
      <button className={`float ${floatStyle}`}> {floatIcon} </button>
    </>
  );
};
