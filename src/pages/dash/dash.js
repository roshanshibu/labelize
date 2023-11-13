import CountCard from "components/cards/count/count";
import "./dash.css";
import Branding from "assets/Branding.svg";
import TopTagsCard from "components/cards/topTags/topTags";
import ImagesByDayCard from "components/cards/imagesByDay/imagesByDay";
import BellIcon from "components/bellIcon/bellIcon";
import NotificationsTray from "components/notificationsTray/notificationsTray";
import { useContext, useState } from "react";
import { DashCardsContext, NotificationContext } from "MainRoutes";

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
  const dashCardContext = useContext(DashCardsContext);

  return (
    <div className="dashContainer">
      <div className="hide-desktop dashHeader">
        <img src={Branding} />
        <BellIcon
          count={10}
          onClick={() => {
            notificationContext.setShowNotifications(
              !notificationContext.showNotifications
            );
          }}
        />
      </div>
      <div className="cardsContainer">
        {dashCardContext.dashCards
          .filter((dashCard) => dashCard.checked)
          .map((dashCardName, index) => {
            switch (dashCardName.label) {
              case "Images Annotated Today":
                return <CountCard count={125} percent={12} />;
              case "Top Tags":
                return <TopTagsCard data={topTagsData} />;
              case "Images by day":
                return <ImagesByDayCard data={topTagsData} />;
              default:
                return <p>{dashCardName.label}</p>;
            }
          })}
      </div>
    </div>
  );
};

export default Dash;
