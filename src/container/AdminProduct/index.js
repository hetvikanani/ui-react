import React, { Component } from "react";

import { AdminProStyle } from "./style";
import { Menu, Header,ProAddEditDetail } from "components/Form";

class AdminProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  countInc = () => {
    try {
      const { count } = this.state;
      this.setState({count:count+1})

    } catch (error) {
      console.log(error);
    }
  };
  pageUI = () => {
    try {
      const { count } = this.state;
      return count === 0 ? <ProAddEditDetail countInc={this.countInc} /> : "";
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <AdminProStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <h2>Products</h2>
            <div className="formDiv">
            <h2>Add New Product:</h2>  
            {this.pageUI()}
            </div>
          </div>
        </div>
      </AdminProStyle>
    );
  }
}
export default AdminProduct;
