import React, { Component } from "react";
import { Row, Col, Card,InputNumber, Table} from "antd";

import { WalletStyle } from "./style";
import { Menu, Button, Header, Input } from "components/Form";
import { topRowData, tableData } from "./constatnt";
import { PageConst } from "App/AppConstant";

const onSearch = (value) => console.log(value);

class Salse extends Component {
  constructor() {
    super();
    this.state = {
      addMoney: "",
      withDraw: "",
      addMoneyError: false,
      withDrawError: false,
      submitClicked: false,
    };
  }
  onChange = (value) => {
    console.log("changed", value);
  };
  handleAddMoney = (e) => {
    try {
      this.setState({
        addMoney: e,
        addMoneyError: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleWithdraw = (e) => {
    try {
      this.setState({
        withDraw: e,
        withDrawError: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleSubmit = (a) => {
    try {
      const { addMoney, withDraw } = this.state;
      this.setState({ submitClicked: true });
      let flag = false;
      if (a == "Add Money") {
        if (addMoney.toString() === "") {
          this.setState({ addMoneyError: true });
          flag = true;
        }
      }
      if (a == "Withdraw") {
        if (withDraw.toString() === "") {
          this.setState({ withDrawError: true });
          flag = true;
        }
      } else {
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  handleInput = (name, val) => {
    this.setState({ [name]: val });
  };
  topRowUi = () => {
    try {
      const { addMoney, withDraw, addMoneyError, withDrawError } = this.state;
      return topRowData.map((a, i) => (
        <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
          <Card className="box">
            <h5 className="name">{a.name}</h5>
            {i === 0 && <h1 className="mark">{a.value}</h1>}
            {i !== 0 && (
              <div className="input-div">
                <Input
                  autocomplete={"off"}
                  className={`inputBox ${
                    a.name == "Add Money" && addMoneyError
                      ? "txtError"
                      : "" || (a.name == "Withdraw" && withDrawError)
                      ? "txtError"
                      : ""
                  }  `}
                  value={a.name == "Add Money" ? addMoney : withDraw}
                  type="number"
                  handleChange={(e) => {
                    this.handleInput(
                      a.name == "Add Money" ? "addMoney" : "withDraw",
                      e.target.value
                    );
                  }}
                  suffix={
                    <Button
                      className="btn-head"
                      onClick={() => this.handleSubmit(a.name)}
                    >
                      {a.name}
                    </Button>
                  }
                />
              </div>
            )}{" "}
          </Card>
        </Col>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  inputNumberUi = () => {
    try {
      return (
        <>
          <span className="show">Show</span>
          <InputNumber
            min={1}
            max={100000}
            defaultValue={3}
            onChange={this.onChange}
          />{" "}
          <span className="entries">entries</span>
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  SearchUI = () => {
    try {
      return (
        <div>
          <Input placeholder={PageConst.search} className="serachBox" />
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <WalletStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <div className="">
              <Row gutter={40}>{this.topRowUi()}</Row>
            </div>
            <div className="boxDiv">
              <h2>Transaction History</h2>
              <div className="inputNum-div">
                <div> {this.inputNumberUi()} </div>
                <div>{this.SearchUI()}</div>
              </div>

              <div className="table-div">
                <Table data={tableData} type="wallet" />
              </div>
              <div>
                <p className="last-para">Showing 1 to 3 of 3 entries </p>
              </div>
            </div>
          </div>
        </div>
      </WalletStyle>
    );
  }
}

export default Salse;
