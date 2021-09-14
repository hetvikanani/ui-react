import React, { Component } from "react";
import { Row, Col, Card, Image, Carousel, message } from "antd";

import { Menu, Header } from "components/Form";
import { DashbordStyle } from "./style";
import { TopRowData, Products } from "./constant";
import { banner1, banner2, copy, share } from "components/Images";
import { Months, PageConst } from "App/AppConstant";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReferCode: "51415614566",
    };
  }
  copyCode = () => {
    try {
      const { ReferCode } = this.state;
      navigator.clipboard.writeText(ReferCode);
      message.success("Code Copied");
    } catch (error) {
      console.log(error);
    }
  };
  topRowUi = () => {
    try {
      return TopRowData.map((a, i) => (
        <Col xs={24} sm={12} md={12} lg={12} xl={5} key={i} className="">
          <Card className="box">
            <div className="content">
              <h3 className="name">{a.name}</h3>
              <h1 className="mainTxt">{a.value}</h1>
            </div>
            <Image
              width={70}
              src={a.img}
              preview={false}
              className="topImg"
              alt="img"
            />
          </Card>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  currDateUI = () => {
    try {
      let today = new Date();
      let currDate = today.getDate();
      let monthName = " " + Months[today.getMonth()];
      return (
        <Col xs={24} sm={12} md={12} lg={12} xl={4} className="dateUI">
          <h2 className="mainTxt">
            {currDate + this.suffix_of(currDate)}
            {monthName + "," + today.getFullYear()}
          </h2>
        </Col>
      );
    } catch (error) {
      console.log(error);
    }
  };
  suffix_of = (i) => {
    try {
      let j = i % 10,
        k = i % 100;
      if (j === 1 && k !== 11) return "st";
      else if (j === 2 && k !== 12) return "nd";
      else if (j === 3 && k !== 13) return "rd";
      return "th";
    } catch (error) {
      console.log(error);
    }
  };
  hotSellProd = () => {
    try {
      return Products.map((a, i) => (
        <Col xs={24} sm={8} md={8} lg={8} xl={4} key={i}>
          <div className={"img_div " + a.class}>
            <Image height={25} src={a.img} preview={false} alt={a.class} />
          </div>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { ReferCode } = this.state;
    return (
      <DashbordStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <Row className="top-row">
              {this.topRowUi()}
              {this.currDateUI()}
            </Row>
            <Row className="middle-row" gutter={25}>
              <Col xs={24} sm={24} md={24} lg={24} xl={17}>
                <Card className="box"></Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={7}>
                <div className="slider_div">
                  <Carousel autoplay>
                    <div className="accountDiv">
                      <h2 className="mainTxt">
                        {PageConst.accManDetail + PageConst.colon}
                      </h2>
                      <div className="detailDiv">
                        <span>
                          {PageConst.name} {PageConst.colon} {"Kartik Patel"}
                        </span>
                        <div>
                          {PageConst.contNum} {PageConst.colon} {"9876543210"}
                        </div>
                        <span>
                          {PageConst.emid} {PageConst.colon}{" "}
                          {"kartik@naapbooks.com"}
                        </span>
                      </div>
                    </div>
                    <Image src={banner1} preview={false} alt="banner" />
                    <Image src={banner2} preview={false} alt="banner" />
                  </Carousel>
                </div>
                <div className="referral_div">
                  <h2>{PageConst.refCode}</h2>
                  <div className="ref_Code">
                    <div className="code">{ReferCode}</div>
                    <div className="icons">
                      <div className="icon pointer">
                        <Image
                          width={13}
                          src={copy}
                          preview={false}
                          onClick={this.copyCode}
                          alt="copy"
                        />
                      </div>
                      <a href="mailto:test@gmail.com" className="icon pointer">
                        <Image
                          width={13}
                          src={share}
                          preview={false}
                          alt="email"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="bottom_div">
              <h2 className="mainTxt">{PageConst.hotSellPro}</h2>
              <Row gutter={10}>{this.hotSellProd()}</Row>
            </div>
          </div>
        </div>
      </DashbordStyle>
    );
  }
}

export default DashBoard;
