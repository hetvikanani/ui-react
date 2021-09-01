import React, { Component } from "react";
import { Input } from "antd";
export default class index extends Component {
  automatedComponent = () => {
    const {
      style = {},
      className,
      value,
      onChange,
      password,
      placeholder,
      textArea,
      rows,
    } = this.props;
    let component = null;
    if (password)
      component = (
        <Input.Password
          placeholder={placeholder}
          style={style}
          className={className}
          value={value}
          onChange={onChange}
        />
      );
    else if (textArea)
      component = (
        <Input.TextArea
          placeholder={placeholder}
          style={style}
          className={className}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      );
    else
      component = (
        <Input
          placeholder={placeholder}
          style={style}
          className={className}
          value={value}
          onChange={onChange}
        />
      );
    return component;
  };
  render() {
    const {
      style = {},
      className,
      value,
      onChange,
      password,
      placeholder,
    } = this.props;
    return <>{this.automatedComponent()}</>;
  }
}