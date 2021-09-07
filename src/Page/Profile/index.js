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
    header: "dummy",
    body: "dummy",
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
