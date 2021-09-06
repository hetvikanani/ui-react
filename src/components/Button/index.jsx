// import React, { Component } from "react";
// import { Button } from "antd";

// export default class index extends Component {
//   render() {
//     const { style, className, children } = this.props;

//     return (
//       <Button style={style} className={className}>
//         {children}
//       </Button>
//     );
//   }
// }


import React, { Component } from "react";
import { Button } from "./style";
import { Theme } from "../theme";
const ButtonConstant = {
  primary: { background: Theme.mainColor, color: "#fff" },
  secondary: { background: "#EDF2F7", color: Theme.mainColor },
  answer: { background: "green", color: "#fff" },
  decline: { background: "red", color: "#fff" },
};
class FormButton extends Component {
  render() {
    const { children, type, color, onClick, className, ...props } = this.props;
    return (
      <Button
        bgcolor={ButtonConstant[color]}
        type={type}
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </Button>
    );
  }
}
FormButton.defaultProps = {
  text: "Button",
  color: "primary",
  type: "button",
  className: "",
  handleClick: () => {},
};
export default FormButton;