import React, { Component } from "react";
import { Row } from "antd";

export default class index extends Component {
  render() {
    const { style = {}, className, children, gutter } = this.props;
    return (
      <Row style={style} className={className} gutter={gutter}>
        {children}
      </Row>
    );
  }
}
