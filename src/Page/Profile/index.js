import React, { Component } from "react";
import { Collapse } from "../../components/index";
import BasicDetails from "./Constant/BasicDetails";
import FinanicialDetails from "./Constant/FinancialDetails";
import ContactDetails from "./Constant/ContactDetails";
import { ProfileStyle } from "./style";

class Profile extends Component {
  panelUI = () => {
    try {
      let array = ["Basic Details", "Finanicial Details", "Contact Details"];
      let colArray = [];
      array.forEach((a) => {
        colArray.push({
          header: a,
          body:
            a === "Basic Details" ? (
              <BasicDetails />
            ) : a === "Finanicial Details" ? (
              <FinanicialDetails />
            ) : (
              <ContactDetails />
            ),
        });
      });
      return colArray;
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ProfileStyle>
        <Collapse panelData={this.panelUI()}></Collapse>
      </ProfileStyle>
    );
  }
}

export default Profile;
