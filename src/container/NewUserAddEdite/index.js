import React, { Component } from "react";
import { NewUserStyle } from "./style";
import { Menu, Header, UserInfo, UserRole } from "components/Form";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  countInc = () => {
    try {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    } catch (error) {
      console.log(error);
    }
  };
  pageUI = () => {
    try {
      const { count } = this.state;
      return count === 0 ? (
        <UserInfo countInc={this.countInc} />
      ) : count === 1 ? (
        <UserRole />
      ) : (
        ""
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <NewUserStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h2>Add New User</h2>
            <div className="formDiv">{this.pageUI()}</div>
          </div>
        </div>
      </NewUserStyle>
    );
  }
}
export default NewUser;
