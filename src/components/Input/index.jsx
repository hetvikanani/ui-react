// import React, { Component } from "react";
// import { Input } from "antd";
// export default class index extends Component {
//   automatedComponent = () => {
//     const {
//       style = {},
//       className,
//       value,
//       onChange,
//       password,
//       placeholder,
//       textArea,
//       rows,
//     } = this.props;
//     let component = null;
//     if (password)
//       component = (
//         <Input.Password
//           placeholder={placeholder}
//           style={style}
//           className={className}
//           value={value}
//           onChange={onChange}
//         />
//       );
//     else if (textArea)
//       component = (
//         <Input.TextArea
//           placeholder={placeholder}
//           style={style}
//           className={className}
//           value={value}
//           onChange={onChange}
//           rows={rows}
//         />
//       );
//     else
//       component = (
//         <Input
//           placeholder={placeholder}
//           style={style}
//           className={className}
//           value={value}
//           onChange={onChange}
//         />
//       );
//     return component;
//   };
//   render() {
//     const {
//       style = {},
//       className,
//       value,
//       onChange,
//       password,
//       placeholder,
//     } = this.props;
//     return <>{this.automatedComponent()}</>;
//   }
// }

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
      ...props
    } = this.props;
    let length = max ? max : 45;
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
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            autoComplete="off"
            maxLength={length}
            {...props}
          />
        ) : (
          <Input
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
  tabIndex: "1",
  className: "",
  readOnly: false,
};
export default FormInput;
