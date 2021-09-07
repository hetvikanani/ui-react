import React, { Component } from "react";
import { BlogStyle } from "./style";
import { Button, Card, Input, Label } from "../../components";
import { Row, Col } from "antd";
import Blog1 from "../../images/blog-1.jpg";
import Blog2 from "../../images/blog-2.jpg";
import Blog3 from "../../images/blog-3.jpg";
import Blog4 from "../../images/blog-4.jpg";
import Nbpl from "../../images/video1.webp";
import Vizman from "../../images/video2.webp";
import IPO from "../../images/video3.webp";
import Digital from "../../images/video4.webp";

class Blog extends Component {
  render() {
    return (
      <BlogStyle>
        <div className="mainDiv">
          <Row gutter={24}>
            <Col lg={18} xl={18}>
              <Card className="mainCard">
                <h2>Our Blog</h2>
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog1} className="imgAnimation"></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt iconDate"></i>20th Aug 2021
                          |
                        </p>
                        <p>
                          <i class="fas fa-comment iconDate"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog2} className="imgAnimation"></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt iconDate"></i>20th Aug 2021
                          |
                        </p>
                        <p>
                          <i class="fas fa-comment iconDate"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                </Row>
                <br />
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog3}  className="imgAnimation"></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt iconDate"></i>20th Aug 2021
                          |
                        </p>
                        <p>
                          <i class="fas fa-comment iconDate"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.{" "}
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog4}  className="imgAnimation"></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt iconDate"></i>20th Aug 2021
                          |
                        </p>
                        <p>
                          <i class="fas fa-comment iconDate"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={6} className="videoCol">
              <Card className="mainCard">
                <h2>Our Videos</h2>
                <div className="scroll-bar">
                  <Col>
                    <Card
                      hoverable={true}
                      className="videoCard1"
                      cover={<img src={Nbpl}></img>}
                    ></Card>
                  </Col>
                  <br />
                  <Col>
                    <Card
                      hoverable={true}
                      className="videoCard1"
                      cover={<img src={Vizman}></img>}
                    ></Card>
                    <br />
                  </Col>
                  <Col>
                    <Card
                      hoverable={true}
                      className="videoCard1"
                      cover={<img src={IPO}></img>}
                    ></Card>
                  </Col>
                  <br />
                  <Col>
                    <Card
                      hoverable={true}
                      className="videoCard1"
                      cover={<img src={Digital}></img>}
                    ></Card>
                  </Col>
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="footerRow">
            <Col lg={18} xl={18}>
              <Card className="mainCard">
                <h2>Know us</h2>

                <div>
                  <Row className="footerDiv">
                    <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                    <div class="hoverDiv">
                        <Card
                          className="videoCard1"
                          cover={<img src={Blog1}></img>}
                        ></Card>
                        <div className="overlay">
                          <div className="text">Lorem Ipsum</div>
                        </div>
                      </div> 
                    </Col>

                    <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                    <div class="hoverDiv">
                        <Card
                          className="videoCard1"
                          cover={<img src={Blog2}></img>}
                        ></Card>
                        <div className="overlay">
                          <div className="text">Lorem Ipsum</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                    <div class="hoverDiv">
                        <Card
                          className="videoCard1"
                          cover={<img src={Blog3}></img>}
                        ></Card>
                        <div className="overlay">
                          <div className="text">Lorem Ipsum</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={11} lg={5} xl={5}>
                    <div class="hoverDiv">
                        <Card
                          className="videoCard1"
                          cover={<img src={Blog4}></img>}
                        ></Card>
                        <div className="overlay">
                          <div className="text">Lorem Ipsum</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </BlogStyle>
    );
  }
}

export default Blog;
