import React, { Component } from "react";
import { Input, Label } from "../../../components";
import { Row, Col } from "antd";


export default class BasicDetails extends Component {
  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Company Name"></Label>
            <Input placeholder="Naapbooks Limited"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Partner Code"></Label>
            <Input placeholder="12345"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Email ID"></Label>
            <Input placeholder="text@gmail.com"></Input>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Mobile No"></Label>
            <Input placeholder=""></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="GST Type"></Label>
            <Input placeholder=""></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="GST Number"></Label>
            <Input placeholder="22AAAAA0000A1Z5"></Input>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Pan"></Label>
            <Input placeholder="BNZPM2501F"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Aadhaar No"></Label>
            <Input placeholder="444433332222"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Company Logo"></Label>
            <Input placeholder=""></Input>
          </Col>
        </Row>
      </div>
    );
  }
}
