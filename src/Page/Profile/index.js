import React, { Component } from "react";
import { Collapse } from "../../components";
import BasicDetails from "./BasicDetails";
import { ProfileStyle } from "./style";

const panelData = [
  {
    header: "Basic Details",
    body: "fake",
  },
  {
    header: "Finanicial Details",
    body: "fake",
  },

 
];

class Profile extends Component {
  render() {
    return (
      <ProfileStyle>
        <Collapse panelData={panelData} />
      </ProfileStyle>
    );
  }
}

export default Profile;
