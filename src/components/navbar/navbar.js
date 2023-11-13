import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Branding from "assets/Branding.svg";
import i_home from "assets/homeIcon.svg";
import i_image from "assets/imageIcon.svg";
import i_bell from "assets/bellIcon.svg";
import i_avatar from "assets/avatar.png";
import BellIcon from "components/bellIcon/bellIcon";
import NotificationsTray from "components/notificationsTray/notificationsTray";
import { NotificationContext } from "MainRoutes";

const NavIcon = (props) => {
  return (
    <img
      src={props.icon}
      className={`navIcon ${props.hideMobile ? "hide-mobile" : ""}`}
      onClick={props.onClick ? props.onClick : null}
    />
  );
};

const Navbar = () => {
  const notificationContext = useContext(NotificationContext);
  return (
    <div className="navNotificationGhostContainer">
      <div className="navContainer">
        <img src={Branding} className="hide-mobile" />
        <div className="navIconContainer">
          <NavLink to="/">
            <NavIcon icon={i_home} />
          </NavLink>
          <NavLink to="/upload">
            <NavIcon icon={i_image} />
          </NavLink>
          <BellIcon
            count={10}
            hideMobile={true}
            onClick={() => {
              notificationContext.setShowNotifications(
                !notificationContext.showNotifications
              );
            }}
          />
          <NavLink to="/profile">
            <NavIcon icon={i_avatar} />
          </NavLink>
        </div>
      </div>
      <NotificationsTray
        hideMobile={true}
        showNotifications={notificationContext.showNotifications}
        notifications={[
          {
            title: "Annotation Saved Successfully",
            message:
              "Your manual annotations have been successfully saved. Changes are now applied to the image.",
          },
          {
            title: "Annotation Updated",
            message:
              "The existing annotation has been updated. Your changes are now reflected in the annotation set.",
          },
          {
            title: "Error Saving Annotation",
            message:
              "Oops! We encountered an issue while saving your annotations. Please try again. If the problem persists, contact support for assistance.",
          },
          {
            title: "Image Uploaded Successfully",
            message:
              "Great news! Your image has been successfully uploaded for annotation. You can now start annotating.",
          },
          {
            title: "Error Uploading Image",
            message:
              "Uh-oh! We couldn't upload the image for annotation. Double-check your internet connection and try again. If the issue persists, contact support.",
          },
          {
            title: "Annotation Exported",
            message:
              "Success! Your annotations have been exported in the desired format. You can download the file now.",
          },
          {
            title: "Invalid Annotation Format",
            message:
              "Error: The annotation file you're trying to import is in an invalid format. Make sure it follows the correct structure and try again.",
          },
          {
            title: "Annotation Deleted",
            message:
              "The annotation has been successfully deleted. The image now reflects this change in the annotation set.",
          },
          {
            title: "Maximum Annotations Reached",
            message:
              "Oops! You've reached the maximum allowed number of annotations for this image. Consider removing some or contact your administrator for assistance.",
          },
          {
            title: "Collaborator Annotation Update",
            message:
              "Collaborator Update: Sam has made changes to the annotations. Your annotation set has been updated to reflect the latest changes.",
          },
        ]}
      />
    </div>
  );
};
export default Navbar;
