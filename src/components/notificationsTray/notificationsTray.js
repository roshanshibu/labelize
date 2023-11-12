import { NotificationContext } from "MainRoutes";
import "./notificationsTray.css";
import { useState, useEffect, useRef, useContext } from "react";

function useComponentVisible(initialIsVisible) {
  //custom hook to detect clicks outside of the notification tray
  //so that it can be closed
  const ref = useRef(null);
  const notificationContext = useContext(NotificationContext);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      notificationContext.setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref };
}

const NotificationsTray = (props) => {
  const { ref } = useComponentVisible(true);
  const notificationContext = useContext(NotificationContext);
  return (
    <div ref={ref} className="ghostNotificationTray">
      {notificationContext.showNotifications && (
        <div className="card notificationsContainer">
          <p className="notificationsTitle">Notifications</p>
          {props.notifications.map((notification, index) => (
            <div className="notification" key={index}>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsTray;
