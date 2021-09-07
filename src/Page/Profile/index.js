import React, { Component } from "react";
import { Collapse } from "../../components";
import BasicDetails from "./BasicDetails";
import { ProfileStyle } from "./style";

const panelData = [
 "Basic Details",  "Finanicial Details","Contact Details"
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



// ahi loop fervani 6 like paneldata ma just heading j hse p6i map kri etle 3 var loop frse ema je 
// call tbnay e time e eni body j aave e rite