import CountCard from "components/cards/count/count";
import "./dash.css";
import Branding from "assets/Branding.svg";
import TopTagsCard from "components/cards/topTags/topTags";
import ImagesByDayCard from "components/cards/imagesByDay/imagesByDay";
import BellIcon from "components/bellIcon/bellIcon";
import NotificationsTray from "components/notificationsTray/notificationsTray";
import { useContext, useState } from "react";
import { NotificationContext } from "MainRoutes";

const Dash = () => {
  const topTagsData = {
    labels: ["Dog", "Cat", "Buildings", "Bikes"],
    datasets: [
      {
        label: "Images",
        backgroundColor: "#83A0F6",
        borderWidth: 0,
        hoverBackgroundColor: "#4E77F2",
        data: [62, 38, 17, 8],
      },
    ],
  };

  const notificationContext = useContext(NotificationContext);

  return (
    <div className="dashContainer">
      <div className="hide-desktop dashHeader">
        <img src={Branding} />
        <BellIcon
          count={25}
          onClick={() => {
            notificationContext.setShowNotifications(
              !notificationContext.showNotifications
            );
          }}
        />
      </div>
      <div className="cardsContainer">
        <CountCard count={125} percent={12} />
        <TopTagsCard data={topTagsData} />
        <ImagesByDayCard data={topTagsData} />
      </div>
    </div>
  );
};

export default Dash;
