import React, { Component } from "react";
import { Col } from "antd";

export default class index extends Component {
  render() {
    const { style, className, span, children } = this.props;
    return (
      <Col style={style} className={className} span={span}>
        {children}
      </Col>
    );
  }
}
