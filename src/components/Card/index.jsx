import React, { Component } from "react";
import { Card } from "antd";

export default class index extends Component {
  render() {
    const { style, className, children ,cover} = this.props;

    return (
      <Card style={style} className={className} cover={cover}>
        {children}
      </Card>
    );
  }
}
