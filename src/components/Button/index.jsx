import React, { Component } from "react";
import { Button } from "antd";

export default class index extends Component {
  render() {
    const { style, className, children } = this.props;

    return (
      <Button style={style} className={className}>
        {children}
      </Button>
    );
  }
}
