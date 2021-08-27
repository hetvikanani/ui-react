import React, { Component } from "react";
import { Row, Col, Input, Button, Menu } from "../../components";
// import { FarmStyle } from "./style";

export default class Navbar extends Component {
  render() {
    return (
      // <FarmStyle>
      <div className="navbar">
        <Row className="RowNav">
          <Col span={4}>
            <h2 className="header">crunchbase</h2>
          </Col>
          <Col span={8}>
            <Input placeholder="Search CrunchBase" />
          </Col>
          <Col span={5}>
            <Menu
              
              mode="inline"
              className="advanceSearch"
              subMenu={true}
              subMenuKey="sub4"
              subMenuTitle="Advanced Search"
              menuItems={[
                { key: "1", label: "Option 1" },
                { key: "2", label: "Option 2" },
                { key: "3", label: "Option 3" },
              ]}
            />
          </Col>
          <Col span={3}>
            
            <Button className="BtnTry"><i class="fa fa-bolt" style={{paddingRight:"4px"}}></i>TRY PRO FREE</Button>
          </Col>
          <Col span={2}>
            <Menu
            
              mode="inline"
              className="resource"
              subMenu={true}
              subMenuKey="sub4"
              subMenuTitle="Resources"
              menuItems={[
                { key: "1", label: "Option 1" },
                { key: "2", label: "Option 2" },
                { key: "3", label: "Option 3" },
              ]}
            />
          </Col>
          <Col span={2}>
            <Button className="BtnLog">Log In</Button>
          </Col>
        </Row>
      </div>
      // </FarmStyle>
    );
  }
}
