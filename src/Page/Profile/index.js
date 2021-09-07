import React, { Component } from "react";
import { Collapse } from "../../components";
import BasicDetails from "./BasicDetails";
import { ProfileStyle } from "./style";

const panelData = [
  {
    key: "1",
    header: "Basic Details",
    body: <BasicDetails />,
  },
  {
    key: "2",
    header: "Financial Details",
    body: "dummy",
  },
  {
    key: "3",
    header: "Contact Details",
    body: "Contact Details",
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
