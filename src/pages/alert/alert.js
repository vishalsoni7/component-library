export const Alert = ({ icon, status, children }) => {
  let alertStyle = `alert-${status}`;
  let iconContent;

  if (icon === "error") {
    iconContent = (
      <span role="img" aria-label="error">
        ✕
      </span>
    );
  } else if (icon === "success") {
    iconContent = (
      <span role="img" aria-label="success">
        ✔︎
      </span>
    );
  } else if (icon === "notification") {
    iconContent = (
      <span role="img" aria-label="notification">
        ☻
      </span>
    );
  } else if (icon === "warning") {
    iconContent = (
      <span role="img" aria-label="warning">
        ⚠️️{" "}
      </span>
    );
  }
  return (
    <div className={`alert ${alertStyle}`}>
      <span>
        {iconContent} {children}{" "}
      </span>
    </div>
  );
};
