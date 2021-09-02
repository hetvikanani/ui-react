import React, { Component } from "react";
import { SupportStyle } from "./style";
import { Button, Card, Input, Label } from "../../components";

class Support extends Component {
  render() {
    return (
      <SupportStyle>
        <div className="mainDiv">
          <Card className="cardShadow">
            <div className="parentDiv">
              <Label title="Name"></Label>
              <Input placeholder="Enter Your Name"></Input>
              <Label title="Email"></Label>
              <Input placeholder="Enter Your email address"></Input>
              <Label title="Message"></Label>
              <Input row={3}></Input>
              <Label title="Phone No."></Label>
              <Input placeholder="Enter Your phone no."></Input>
            </div>

            <div className="btnDiv">
              <Button className="button">Submit</Button>
            </div>
          </Card>
        </div>
      </SupportStyle>
    );
  }
}

export default Support;
