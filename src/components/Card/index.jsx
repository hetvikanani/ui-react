import React, { Component } from "react";
import { Card } from "antd";

export default class index extends Component {
  render() {
    const { style, className, children } = this.props;

    return (
      <Card style={style} className={className}>
        {children}
      </Card>
    );
  }
}
