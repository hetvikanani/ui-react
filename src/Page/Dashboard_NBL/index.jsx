import React, { Component } from "react";
import { DashboardStyle } from "./style";
import { Row, Col, Button, Card, Input } from "../../components";

const { TextArea } = Input;

class Dashboard extends Component {
  render() {
    return (
      <DashboardStyle>
        <div className="mainDiv">
          <Row gutter={24}>
            <Col span={12}>
              <Card className="cardShadow">
                <h3>Contact Us</h3>
                <div className="divCard1">
                  <Input className="inputCard" placeholder="Full Name" />
                  <Input className="inputCard" placeholder="Email Address" />
                </div>
                <Input textArea={true} placeholder="Message" rows={4}></Input>
                <div className="btnDiv">
                  <Button className="btnCard1">Send Message</Button>
                </div>
              </Card>
            </Col>
            <Col span={12}>
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
          <Row>
            <Col>
              <Card className="card3Shadow">
                <Row>
                  <Col>
                    <h3>Our Branches</h3>
                  </Col>
                  <div className="inputDiv">
                  <Input placeholder="Search" className="inputCard3" ></Input>
                 </div>
                
                </Row>

                <Row gutter={24}>
                  <Col span={4} className="footerCol">
                    <div className="footerDiv2">Surat</div>
                    <p>
                      Broadway Business Centre,
                      <br />
                      3rd Floor, Netaji Rd,
                      <br />
                      Elisbridge, Ahmedabad,
                      <br />
                      Gujarat 380006
                    </p>{" "}
                  </Col>
                  <Col span={4} className="footerCol">
                    <div className="footerDiv2">Vadodara </div>
                    <p>
                      Broadway Business Centre,
                      <br />
                      3rd Floor, Netaji Rd,
                      <br />
                      Elisbridge, Ahmedabad,
                      <br />
                      Gujarat 380006
                    </p>{" "}
                  </Col>
                  <Col span={4} className="footerCol">
                    <div className="footerDiv2">Mumbai</div>
                    <p>
                      Broadway Business Centre,
                      <br />
                      3rd Floor, Netaji Rd,
                      <br />
                      Elisbridge, Ahmedabad,
                      <br />
                      Gujarat 380006
                    </p>{" "}
                  </Col>
                  <Col span={4} className="footerCol">
                    <div className="footerDiv2">U.S.A</div>
                    <p>
                      Broadway Business Centre,
                      <br />
                      3rd Floor, Netaji Rd,
                      <br />
                      Elisbridge, Ahmedabad,
                      <br />
                      Gujarat 380006
                    </p>{" "}
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </DashboardStyle>
    );
  }
}
export default Dashboard;
