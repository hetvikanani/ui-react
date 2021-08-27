import React, { Component } from "react";
import { Divider, Image } from "antd";
import { BuildOutlined } from "@ant-design/icons";
import Logo from "../../Image/farm.png";
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
            <Image src={Logo}></Image>
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
                  <i class="fa fa-bolt logo"></i>CONNECT TO CRM
                </Button>

                <span>
                  <Button className="SaveBtn">
                    <i class="fas fa-plus-circle iconPlus"></i>SAVE
                  </Button>
                </span>
                <span className="dotSpan">:</span>
              </div>
            </div>
            <div>
              <Tabs
                className="TopBar-tab"
                type="card"
                tabOptions={[
                  { key: "1", tab: "Summary" },
                  { key: "2", tab: "Financials" },
                  { key: "3", tab: "People" },
                  { key: "4", tab: "Technology" },
                  { key: "5", tab: "Signals & News" },
                ]}
                defaultActiveKey="1"
              ></Tabs>
            </div>
          </div>
        </div>
        <Row gutter={24} className="aboutRow">
          <Col span={7}>
            <Card className="middleCard">
              <h1>
                {" "}
                <BuildOutlined style={{ paddingRight: "9px" }} />
                About
              </h1>
              <p>
                FarmLead is North America's grain marketplace. Changing the way
                farmers sell grain.
              </p>

              <p>
                <i class="fas fa-map-marker-alt">Ottawa, Ontario, Canada</i>
              </p>

              <p>
                <i class="fas fa-user-friends"></i>11-50
              </p>
              <p>
                <i class="fas fa-dollar-sign"></i>Series
              </p>
              <p>
                <i class="fas fa-flag"></i>Private
              </p>
              <p>
                <i class="fas fa-globe-asia"></i>FarmLead.com
              </p>
              <p>
                <i class="far fa-chart-bar"></i>25,679
              </p>
            </Card>
          </Col>
          <div className="verticalLine"></div>
          <Col span={8}>
            <Card style={{ width: 400 }}>
              <h1>
                {" "}
                <i class="far fa-newspaper" style={{ paddingRight: "9px" }}></i>
                Highlights
              </h1>
            </Card>
          </Col>
          <div className="verticalLine"></div>
          <Col span={8}>
            <Card>
              <h1 className="topNews">
                <i
                  class="fas fa-network-wired"
                  style={{ paddingRight: "9px" }}
                ></i>
                Recent News & Activity{" "}
              </h1>
              <p>
                <i class="fas fa-newspaper iconNews"></i>
                News • Aug 19, 2020 <br />
                Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                Data Packs
              </p>
              <Divider style={{ backgroundColor: "#d3d3d3" }} />
              <p>
                <i class="fas fa-newspaper iconNews"></i>
                News • Aug 19, 2020 <br />
                Manila Bulletin — Be Work and Watch-Ready at Home with Bigger
                Data Packs
              </p>
              <Divider style={{ backgroundColor: "#d3d3d3" }} />
              <p>
                <i class="fas fa-newspaper iconNews"></i>
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
        <Row gutter={24}>
          <Col span={16}>
            {/* <div className="middle-section"> */}
              {/* <div className="middle-header"> */}
                <Card className="cardShadow">
                  <h1>Details</h1>
                  <p>Industries</p>
           
                  <div> Founded Date</div>
                  <div className="bottomeDiv">2013</div>
                  <br />
                  <div>Operating Status </div>
                  <div className="bottomeDiv"> Active</div>
                  <br />

                  <div>Legal Name </div>
                  <div className="bottomeDiv">FarmLead Resources Ltd.</div>
                  
                  <Divider style={{ border: "1px solid #e5e4e2" }} />
                  <div> Company Type </div>
                  <div className="bottomeDiv"> For Profit</div>
                  
                  <Divider style={{ border: "1px solid #e5e4e2"}} />
                  <div>  Contact Email </div>
                  <div className="bottomeDiv">contact@farmlead.com</div>
                  <p>
                   
                    
                   
                    <p style={{ paddingTop: "1rem" }}>
                      Built by farmers for farmers, FarmLead is reinventing how
                      grain is marketed and sold through the world’s fastest
                      growing grain
                      marketplace. Available online and as a mobile app,
                      FarmLead also provides farmers access to excl market
                      research, grain
                     testing, price visibility and reduced brokerage
                      fees and risks. The FarmLead Marketplace...
                    </p>
                  </p>
                </Card>
              {/* </div> */}
            {/* </div> */}
          </Col>
          <Col span={8}></Col>
        </Row>
        <Row gutter={24}>
          <Col span={16}>
            <div className="company-section">
              <div className="middle-header">
                <Card>
                  <h1>Lists Featuring This Company</h1>

                  <div className="container2">
                    <Image
                      src={Logo}
                      width={50}
                      className="iconDetails"
                    ></Image>

                    <div className="servicePra">
                      <p>Service Provider Capital Portfolio Companies </p>
                      <div className="serviceDiv">
                        178 Number of Organizations • $5.5B Total Funding Amount
                        • 1,741 Number of Investors
                      </div>
                      <div className="trackDiv">
                        <Button className="track-btn">
                          <i class="fa fa-bolt logo"></i>TRACK
                        </Button>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="container2">
                    <Image
                      src={Logo}
                      width={50}
                      className="iconDetails"
                    ></Image>

                    <div className="servicePra">
                      <p>Micro VC Funded Companies (Top 10K) </p>
                      <div className="serviceDiv">
                        9,994 Number of Organizations • $936.2B Total Funding
                        Amount • 108,372 Number of Inv
                      </div>
                      <div className="trackDiv">
                        <Button className="track-btn">
                          <i class="fa fa-bolt logo"></i>TRACK
                        </Button>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="container2">
                    <Image
                      src={Logo}
                      width={50}
                      className="iconDetails"
                    ></Image>

                    <div className="servicePra">
                      <p>Great Lakes Early Stage Companies </p>
                      <div className="serviceDiv">
                        970 Number of Organizations • $18.3B Total Funding
                        Amount • 4,384 Number of Investors
                      </div>
                      <div className="trackDiv">
                        <Button className="track-btn">
                          <i class="fa fa-bolt logo"></i>TRACK
                        </Button>
                      </div>
                    </div>
                  </div>
                  <br />
                </Card>
              </div>
            </div>
          </Col>
        </Row>

        <div className="Box">
          <div className="Container">
            <Row className="footerRow">
              <Col className="footerCol">
                {/* <i class="fab fa-facebook-square"></i> */}
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
