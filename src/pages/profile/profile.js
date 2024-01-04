import { useContext, useState } from "react";
import "./profile.css";
import i_avatar from "assets/avatar.png";
import { DashCardsContext } from "MainRoutes";
import { useNavigate } from "react-router-dom";

const user = {
  firstName: "Demo",
  lastName: "User",
};
const Profile = () => {
  const dashCardContext = useContext(DashCardsContext);

  const handleCheckboxChange = (label) => {
    if (label.indexOf("(mandatory)") > 0) {
      return;
    }
    // Update the list of checked checkboxes based on the label
    dashCardContext.setDashCards((previousArray) => {
      return previousArray.map((item) => {
        if (item.label === label) {
          // Switch the 'checked' value for the matching object
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  const navigate = useNavigate();
  const handleSignOut = (e) => {
    localStorage.removeItem("LabelizeMockJWT");
    navigate("/auth");
  };

  return (
    <div className="profileContainer">
      <div className="profileHeader">
        <img src={i_avatar} />
        <div className="profileHeaderText">
          <p>Hello</p>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
        </div>
      </div>
      <div className="settingsContainer">
        <div className="dashboardCardsSettings customChecklist card">
          <h1 className="settingsCardTitle">Customize Dashboard</h1>
          {dashCardContext.dashCards.map((dashCardName, index) => (
            <label class="container">
              {dashCardName.label}
              <input
                type="checkbox"
                checked={dashCardName.checked}
                // set to null instead of false, because otherwise it will force uncheck by default
                onChange={() => handleCheckboxChange(dashCardName.label)}
              />
              <span class="checkmark"></span>
            </label>
          ))}
        </div>

        <div className="userInformationContainer card">
          <h1 className="settingsCardTitle">User Information</h1>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder={user.firstName}
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder={user.lastName}
          />

          <p class="blueButton">Update</p>
        </div>
      </div>
      <button type="submit" className="signOutButton" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
