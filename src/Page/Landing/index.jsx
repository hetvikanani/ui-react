import React, { Component } from "react";
import { FarmStyle } from "./style";
import { Menu, Image, Card, Divider, Tabs } from "antd";
// import FarmImg from "farm.png";
import { Row, Col, Input, Button } from "../../components";

const { SubMenu } = Menu;
const { TabPane } = Tabs;

export default class Farm extends Component {
  render() {
    return (
      <FarmStyle>
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
                // onClick={this.handleClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className="advanceSearch"
              >
                <SubMenu key="sub4" title="Advanced Search">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col span={3}>
              <Button className="BtnTry">TRY FOR FREE</Button>
            </Col>
            <Col span={2}>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className="resource"
              >
                <SubMenu key="sub4" title="Resources">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col span={2}>
              <Button className="BtnLog">Log In</Button>
            </Col>
          </Row>
        </div>
        <div className="topBar-section">
          <div className="topBar-img">Img</div>
          <div className="topBar-first">
            <div className="topBar-first-heading">
              <div>
                <div>Organization</div>
                <div>
                  <h1>FarmLead</h1>
                </div>
              </div>
              <div>
                <span>Connect To CRM</span>
                <span>
                  <Button>Save</Button>
                </span>
                <span>:</span>
              </div>
            </div>
            <div>
              <Tabs type="card">
                <TabPane tab="Tab 1" key="1"></TabPane>
                <TabPane tab="Tab 2" key="2"></TabPane>
                <TabPane tab="Tab 3" key="3"></TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <Row gutter={24} className="aboutRow">
          <Col span={7}>
            <Card style={{ width: 400 }}>
              <h1>About</h1>
              <p>
                FarmLead is North America's grain marketplace. Changing the way
                farmers sell grain.
              </p>
              <p>Ottawa, Ontario, Canada</p>
              <p>11-50</p>
              <p>Series A</p>
              <p>Private</p>
              <p>FarmLead.com</p>
              <p>25,679</p>
            </Card>
          </Col>
          <div className="verticalLine"></div>
          <Col span={8}>
            <Card style={{ width: 400 }}>
              <h1>Highlights</h1>
              <p>
                FarmLead is North America's grain marketplace. Changing the way
                farmers sell grain.
              </p>
              <p>Ottawa, Ontario, Canada</p>
              <p>11-50</p>
            </Card>
          </Col>
          <div className="verticalLine"></div>s
          <Col span={8}>
            <Card style={{ width: 400 }}>
              <h1>Recent News & Activity </h1>
              <p>
                News • Aug 19, 2020 <br />
                Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                Data Packs
              </p>
              <Divider style={{ backgroundColor: "#d3d3d3" }} />
              <p>
                News • Aug 19, 2020 <br />
                Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                Data Packs
              </p>
              <Divider style={{ backgroundColor: "#d3d3d3" }} />
              <p>
                News • Aug 19, 2020 <br />
                Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                Data Packs
              </p>
              <a href="#">VIEW ALL</a>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card
            title="Default size card"
            style={{ width: 300, border: "1px solid" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
      </FarmStyle>
    );
  }
}
