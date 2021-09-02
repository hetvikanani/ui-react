import React, { Component } from "react";
import { BlogStyle } from "./style";
import { Button, Card, Input, Label } from "../../components";
import { Image, Row, Col } from "antd";
import Blog1 from "../../images/blog-1.jpg";
import Blog2 from "../../images/blog-2.jpg";
import Blog3 from "../../images/blog-3.jpg";
import Blog4 from "../../images/blog-4.jpg";
import Nbpl from "../../images/video1.webp";
import Vizman from "../../images/video2.webp";
import IPO from "../../images/video3.webp";


class Blog extends Component {
  render() {
    return (
      <BlogStyle>
        <div className="mainDiv">
          <Row>
            <Col xl={8} sm={8} md={8} lg={16} xl={16}>
              <Card className="mainCard" style={{ width: 800 }}>
                <h2>Our Blog</h2>
                <Row>
                  <Col lg={11} xl={11}>
                    <Card
                      className="parentCard"
                      style={{ width: 300 }}
                      cover={<img src={Blog1}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt"></i>20th Aug 2021
                        </p>
                        <p>
                          <i class="fas fa-comment"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.{" "}
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                  <Col  >
                    <Card
                      className="parentCard"
                      style={{ width: 300 }}
                      cover={<img src={Blog2}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt"></i>20th Aug 2021
                        </p>
                        <p>
                          <i class="fas fa-comment"></i>Comment
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
                <Row>
                  <Col lg={11} xl={11}>
                    <Card
                      className="parentCard"
                      style={{ width: 300 }}
                      cover={<img src={Blog3}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt"></i>20th Aug 2021
                        </p>
                        <p>
                          <i class="fas fa-comment"></i>Comment
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in justo et mauris dictum blandit vitae ac lacus.{" "}
                      </p>
                      <Button className="button">Read More</Button>
                    </Card>
                  </Col>
                  <Col  >
                    <Card
                      className="parentCard"
                      style={{ width: 300 }}
                      cover={<img src={Blog4}></img>}
                    >
                      <h3>This is a Standard post with a Youtube Video</h3>
                      <div className="iconDiv">
                        <p>
                          <i class="fas fa-calendar-alt"></i>20th Aug 2021
                        </p>
                        <p>
                          <i class="fas fa-comment"></i>Comment
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
            <Col  lg={8} xl={8}>
              <Card className="mainCard">
                <h2>Our Videos</h2>

                <Card
                  className="videoCard1"
                  style={{ width: 350 }}
                  cover={<img src={Nbpl}></img>}
                ></Card>
                <br/>
                <Card
                  className="videoCard1"
                  style={{ width: 350 }}
                  cover={<img src={Vizman}></img>}
                ></Card><br/>
                 <Card
                  className="videoCard1"
                  style={{ width: 350 }}
                  cover={<img src={IPO}></img>}
                ></Card>
              </Card>
            </Col>
          </Row>
        </div>
      </BlogStyle>
    );
  }
}

export default Blog;
