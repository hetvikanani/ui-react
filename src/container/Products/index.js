import React, { Component } from "react";
import { Row, Col, Card, Image } from "antd";
import { NavLink } from "react-router-dom";

import { ProductStyle } from "./style";
import { Menu, Header } from "components/Form";
import { CRdata } from "./constant";
class products extends Component {
  CardUI = () => {
    try {
      return CRdata.map((a, i) => (
        <Col xs={24} sm={24} md={12} lg={12} xl={8} key={i}>
          <Card className="main-card-div">
            <div className={"head-box " + a.class}>
              <Image src={a.img} preview={false} className="img-div" />
            </div>
            <div className="contant_div">
              <div className="heding_div">
                <h3>{a.heading}</h3>
                <h3>{a.heading2}</h3>
              </div>
            </div>
            <p className="pere_con_div">{a.content}</p>
            <NavLink to={"/productDetail/" + a.heading.split(" ")[0]}>
              View More
            </NavLink>
          </Card>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ProductStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h2>NBL Products</h2>
            <div className="products_div">
              <Row gutter={25}>{this.CardUI()}</Row>
            </div>
          </div>
        </div>
      </ProductStyle>
    );
  }
}
export default products;
