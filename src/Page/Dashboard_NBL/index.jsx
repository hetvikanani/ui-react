import React, { Component } from "react";
import { DashboardStyle } from "./style";
import { Row, Col, Button, Card, Input } from "../../components";

class Dashboard extends Component {
  render() {
    return (
      <DashboardStyle>
        <div className="mainDiv">
          <Row>
            <Col xs={24} sm={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Card className="cardShadow">
                <h3>Contact Us</h3>
                <div className="divCard1">
                  <Input className="inputCard" placeholder="Full Name" />
                  <Input className="inputCard" placeholder="Email Address" />
                </div>
                <Input row={4} placeholder="Message"></Input>
                <div className="btnDiv">
                  <Button className="btnCard1">Send Message</Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="cardShadow">
                <h3>Head Office</h3>
                <div className="divCard2">
                  <div className="iconDiv">
                    <i class="fas fa-map-marker-alt icon"></i>
                  </div>
                  <div className="pragraphDiv">
                    <p>
                      Broadway Business Centre,
                      <br />
                      3rd Floor, Netaji Rd,
                      <br />
                      Elisbridge, Ahmedabad,
                      <br />
                      Gujarat 380006{" "}
                    </p>{" "}
                  </div>
                </div>
                <div className="divCard2">
                  <div className="iconDiv">
                    {" "}
                    <i class="fas fa-phone-alt icon"></i>
                  </div>
                  <div className="pragraphDiv">
                    <p>+91 79264 46782</p>{" "}
                  </div>
                </div>
                <div className="divCard2">
                  <div className="iconDiv">
                    {" "}
                    <i class="fas fa-envelope icon"></i>
                  </div>
                  <div className="pragraphDiv">
                    <p>info@naapbooks.com</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <div>
            <Card className="card3Shadow">
              <div className="inputDiv">
                <h3>Our Branches</h3>

                <div>
                  <Input placeholder="Search"></Input>
                </div>
              </div>

              <Row gutter={24}>
                <Col
                  span={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  className="footerCol"
                >
                  <div className="footerDiv2">Surat</div>
                  <p>
                    Broadway Business Centre,
                    <br />
                    3rd Floor, Netaji Rd,
                    <br />
                    Elisbridge, Ahmedabad,
                    <br />
                    Gujarat 380006
                  </p>
                </Col>
                <Col
                  span={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  className="footerCol"
                >
                  <div className="footerDiv2">Vadodara </div>
                  <p>
                    Broadway Business Centre,
                    <br />
                    3rd Floor, Netaji Rd,
                    <br />
                    Elisbridge, Ahmedabad,
                    <br />
                    Gujarat 380006
                  </p>
                </Col>
                <Col
                  span={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  className="footerCol"
                >
                  <div className="footerDiv2">Mumbai</div>
                  <p>
                    Broadway Business Centre,
                    <br />
                    3rd Floor, Netaji Rd,
                    <br />
                    Elisbridge, Ahmedabad,
                    <br />
                    Gujarat 380006
                  </p>
                </Col>
                <Col
                  span={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  className="footerCol"
                >
                  <div className="footerDiv2">U.S.A</div>
                  <p>
                    Broadway Business Centre,
                    <br />
                    3rd Floor, Netaji Rd,
                    <br />
                    Elisbridge, Ahmedabad,
                    <br />
                    Gujarat 380006
                  </p>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </DashboardStyle>
    );
  }
}
export default Dashboard;
