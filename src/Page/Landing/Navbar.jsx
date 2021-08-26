import React, { Component } from "react";
import { Row, Col, Input, Button, Menu } from "../../components";

export default class Navbar extends Component {
  render() {
    return (
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
              // defaultSelectedKeys={["1"]}
              // defaultOpenKeys={["sub1"]}
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
            <Button className="BtnTry">TRY FOR FREE</Button>
          </Col>
          <Col span={2}>
            <Menu
              // defaultSelectedKeys={["1"]}
              // defaultOpenKeys={["sub1"]}
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
    );
  }
}
