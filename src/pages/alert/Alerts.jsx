import { SideBar } from "../../sidebar/SideBar";

import { Alert } from "./alert";
import "./alert.css";

export const Alerts = () => {
  return (
    <div className="alert-parent-div">
      <SideBar />

      <div className="alert-child-div">
        <h2> Alert Component </h2>
        <p>
          The Alert component id used to display various types of messages with
          differet status.
        </p>
        <div className="alert-child-div-2">
          <Alert icon="success" status="success">
            Success
          </Alert>

          <Alert icon="error" status="error">
            Error
          </Alert>

          <Alert icon="warning" status="warning">
            Warning
          </Alert>

          <Alert icon="notification" status="notification">
            Notification
          </Alert>
        </div>{" "}
        <div>
          <h2> How to use? </h2>
          <img src="alert2.svg" alt="alert" className="alert-use" />{" "}
        </div>
      </div>
    </div>
  );
};
