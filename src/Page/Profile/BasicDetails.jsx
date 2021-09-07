import React, { Component } from "react";
import { Input, Label } from "../../components";
import { Row, Col } from "antd";

export default class BasicDetails extends Component {
  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Label title="Name"></Label>
            <Input placeholder="Enter Your Name"></Input>
          </Col>
        </Row>
      </div>
    );
  }
}
