import React, { Component } from "react";
import { BlogStyle } from "./style";
import { Button, Card, Input, Label } from "../../components";
import {  Row, Col } from "antd";
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
          <Row>
            {/* <Col sm={8} md={8} lg={16} xl={16}> */}
            <Col xs={24} sm={24} md={14} lg={16} xl={16}>
              <Card className="mainCard" style={{ width: 800 }}>
                <h2>Our Blog</h2>
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog1}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt icon"></i>20th Aug 2021 |
                        </p>
                        <p>
                          <i class="fas fa-comment icon2"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.{" "}
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog2}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt icon"></i>20th Aug 2021 |
                        </p>
                        <p>
                          <i class="fas fa-comment icon2"></i>Comment
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
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog3}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt icon"></i>20th Aug 2021 |
                        </p>
                        <p>
                          <i class="fas fa-comment icon2"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.{" "}
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card
                      hoverable={true}
                      className="parentCard"
                      cover={<img src={Blog4}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt icon"></i>20th Aug 2021 |
                        </p>
                        <p>
                          <i class="fas fa-comment icon2"></i>Comment
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
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
              <Card className="mainCard">
                <h2>Our Videos</h2>
                <div className="scroll-bar">
                  <Card
                     hoverable={true}
                    className="videoCard1"
                    style={{ width: 310}}
                    cover={<img src={Nbpl}></img>}
                  ></Card>
                  <br />
                  <Card
                    hoverable={true}
                    className="videoCard1"
                    style={{ width: 310}}
                    cover={<img src={Vizman}></img>}
                  ></Card>
                  <br />

                  <Card
                    hoverable={true}
                    className="videoCard1"
                    style={{ width: 310}}
                    cover={<img src={IPO}></img>}
                  ></Card>
                  <br/>
                    <Card
                      hoverable={true}
                      className="videoCard1"
                      style={{ width: 310}}
                      cover={<img src={Digital}></img>}
                    ></Card>
                </div>
              </Card>
            </Col>
          </Row>
          <Row gutter={24} className="footerRow">
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Card  className="mainCard">
            <h2>Know us</h2>
            <div className="footerDiv">
            <Card className="videoCard1" style={{width:210}} cover={<img src={Blog1}></img>}></Card>
            <Card className="videoCard1" style={{width:210}} cover={<img src={Blog2}></img>}></Card>
            <Card className="videoCard1" style={{width:210}} cover={<img src={Blog3}></img>}></Card>
            <Card className="videoCard1" style={{width:210}} cover={<img src={Blog4}></img>}></Card>

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
