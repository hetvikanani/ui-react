import React, { Component } from "react";
import { Input } from "antd";

export default class index extends Component {
  render() {
    const {
      style = {},
      className,
      value,
      onChange,
      password,
      placeholder,
    } = this.props;

    return (
      <>
        {!password ? (
          <Input
            placeholder={placeholder}
            style={style}
            className={className}
            value={value}
            onChange={onChange}
          />
        ) : (
          <Input.Password
            placeholder={placeholder}
            style={style}
            className={className}
            value={value}
            onChange={onChange}
          />
        )}
      </>
    );
  }
}
