import React, { Component } from "react";
import { Divider } from "antd";
import { BuildOutlined } from "@ant-design/icons";

import { FarmStyle } from "./style";
import { Row, Col, Button, Card, Tabs } from "../../components";
import Navbar from "./Navbar";

export default class Farm extends Component {
  constructor() {
    super();
    this.state = {
      heightSet: 0,
    };
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("scroll", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ heightSet: window.scrollY });
  };
  render() {
    let stick = this.state.heightSet < 85 ? true : false;
    return (
      <FarmStyle>
        <Navbar />

        <div className={`${stick ? "topBar-section" : "jadu"}`}>
          <div className="topBar-img">
            <img alt="farm" width={100} src="../../Image/farm.png"></img>
          </div>
          <div className="topBar-first">
            <div className={`${!stick ? "topBar-first-heading" : ""}`}>
              <div>
                {stick && (
                  <>
                    <BuildOutlined className="icon" />
                    <span className="OrganizationDiv">ORGANIZATION</span>
                  </>
                )}
                <div>
                  {stick ? (
                    <h1 className="topBar-header">FarmLead</h1>
                  ) : (
                    <h3>FarmLead</h3>
                  )}
                </div>
              </div>
              <div className="TopBar-side">
                <Button className="topBar-btn">
                  <i class="fa fa-bolt"></i>Connect To CRM
                </Button>

                <span>
                  <Button className="SaveBtn">SAVE</Button>
                </span>
                <span className="dotSpan">:</span>
              </div>
            </div>
            <div>
              <Tabs
                type="card"
                tabOptions={[
                  { key: "1", tab: "Summary" },
                  { key: "2", tab: "Financials" },
                ]}
                defaultActiveKey="1"
              ></Tabs>
            </div>
          </div>
        </div>
        <Row gutter={24} className="aboutRow">
          <Col span={7}>
            <Card>
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
            </Card>
          </Col>
          <div className="verticalLine"></div>
          <Col span={8}>
            <Card>
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
              <a href="#" className="viewLink">
                VIEW ALL
              </a>
            </Card>
          </Col>
        </Row>
        <Divider className="divider" />
        <div className="middle-section" style={{ border: "1px solid red" }}>
          <div className="middle-header">
            <Card>
              <h1>Details</h1>
              <p>Industries</p>
              {/* <div className="middle-span">
            <span> Agriculture</span>
              <span>Farming</span>
              <span>Marketplace</span>
              <span>Mobile Apps</span>
            </div> */}
              <p>
                Founded Date
                <br />
                2013
              </p>
              <p>
                Operating Status <br />
                Active
              </p>
              <p>
                Legal Name <br />
                FarmLead Resources Ltd.
              </p>
              <Divider style={{ border: "1px solid #e5e4e2" }} />
              <p>
                Company Type <br />
                For Profit
              </p>
              <Divider style={{ border: "1px solid #e5e4e2" }} />
              <p>
                Contact Email <br />
                contact@farmlead.com
                <p style={{ paddingTop: "1rem" }}>
                  Built by farmers for farmers, FarmLead is reinventing how
                  grain is marketed and sold through the world’s fastest growing
                  grain
                  <br /> marketplace. Available online and as a mobile app,
                  FarmLead also provides farmers access to exclusive market
                  research, grain
                  <br /> testing, price visibility and reduced brokerage fees
                  and risks. The FarmLead Marketplace
                </p>
              </p>
            </Card>
          </div>
        </div>
        <div className="company-section" style={{ border: "1px solid red" }}>
          <div className="middle-header">
            <Card>
              <h1>Lists Featuring This Company</h1>

              <div>
                <p>image</p>
              </div>
            </Card>
          </div>
        </div>
        <div className="Box">
          <div className="Container">
            <Row className="footerRow">
              <Col className="footerCol">
                <i class="fab fa-facebook-square"></i>
                <h2 className="footerHeading">crunchbase</h2>
                <div className="footerDiv">Stay Connected </div>
                <a className="footerDiv" href="#">
                  Crunchbase News
                </a>
                <a className="footerDiv" href="#">
                  Subscribe to the Crunchbase Daily
                </a>
              </Col>
              <Col className="footerCol">
                <div className="footerDiv2">Who We Are </div>
                <a className="footerDiv3" href="#">
                  Company
                </a>
                <a className="footerDiv3" href="#">
                  Careers
                </a>
                <a className="footerDiv3" href="#">
                  Partners
                </a>
                <a className="footerDiv3" href="#">
                  Blog
                </a>
                <a className="footerDiv3" href="#">
                  Press
                </a>
                <a className="footerDiv3" href="#">
                  Contact Us
                </a>
              </Col>
              <Col className="footerCol1">
                <div className="footerDiv2">What We Do</div>
                <a className="footerDiv3" href="#">
                  Crunchbase Pro
                </a>
                <a className="footerDiv3" href="#">
                  Marketplace
                </a>
                <a className="footerDiv3" href="#">
                  Crunchbase Enterprise
                </a>
                <a className="footerDiv3" href="#">
                  Data Licensing
                </a>
                <a className="footerDiv3" href="#">
                  Customer Stories
                </a>
                <a className="footerDiv3" href="#">
                  Pricing
                </a>
              </Col>
              <Col className="footerCol">
                <div className="footerDiv2">Helpful Links</div>
                <a className="footerDiv3" href="#">
                  Create Profile
                </a>
                <a className="footerDiv3" href="#">
                  Featured Lists and Searches
                </a>
                <a className="footerDiv3" href="#">
                  The Crunchbase Difference
                </a>
                <a className="footerDiv3" href="#">
                  Knowledge Center
                </a>
                <a className="footerDiv3" href="#">
                  Privacy
                </a>
                <a className="footerDiv3" href="#">
                  Do Not Sell My Info
                </a>
              </Col>
              <p className="footerEnd">
                Browse By: Organizations, People, Events
              </p>
              <p className="footerEnd1">
                Terms of Service | Privacy Policy | Sitemap | © 2021 Crunchbase
                Inc. All Rights Reserved. (0.1.12227 569)
              </p>
            </Row>
          </div>
        </div>
      </FarmStyle>
    );
  }
}

{
  /* <div className="topBar-section">
<div className="topBar-img">
  <Image width={100} src="../../Image/farm.png"></Image>
</div>
<div className="topBar-first">
  <div className="topBar-first-heading">
    <div>
      <BuildOutlined className="icon" />
      <span className="OrganizationDiv">ORGANIZATION</span>
      <div>
        <h1 className="topBar-header">FarmLead</h1>
      </div>
    </div>
    <div className="TopBar-side">
      <Button className="topBar-btn">
        <i class="fa fa-bolt"></i>Connect To CRM
      </Button>

      <span>
        <Button className="SaveBtn">SAVE</Button>
      </span>
      <span className="dotSpan">:</span>
    </div>
  </div>
  <div>
    <Tabs type="card">
      <TabPane tab="Summary" key="1"></TabPane>
      <TabPane tab="Financials" key="2"></TabPane>
      <TabPane tab="People" key="3"></TabPane>
      <TabPane tab="Technology" key="4"></TabPane>
      <TabPane tab="Signals & News" key="5"></TabPane>
    </Tabs>
  </div>
</div>
</div> */
}
