import React, { Component } from "react";
import { Input } from "antd";

import { FormWrapper } from "./style";
const { TextArea } = Input;
class FormInput extends Component {
  render() {
    const {
      handleChange,
      className,
      size,
      formClass,
      row,
      password,
      max,
      allowClearoff,
      ...props
    } = this.props;
    let length = max ? max : 50;
    return (
      <FormWrapper className={formClass ? formClass : ""}>
        {row ? (
          <TextArea
            rows={row}
            onChange={handleChange}
            className={`form-control ${className}`}
            maxLength={length}
            {...props}
          />
        ) : password ? (
          <Input.Password
            allowClear={!allowClearoff}
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            autoComplete="off"
            maxLength={length}
            {...props}
          />
        ) : (
          <Input
            allowClear={!allowClearoff}
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            maxLength={length}
            {...props}
          />
        )}
      </FormWrapper>
    );
  }
}
FormInput.defaultProps = {
  size: "middle",
  placeholder: "",
  className: "",
  readOnly: false,
};
export default FormInput;
