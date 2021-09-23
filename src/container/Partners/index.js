import React, { Component } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";

import { PartnersStyle } from "./style";
import { Menu, Header, Table, Input } from "components/Form";
import { tableData } from "./constant";
import { PageConst } from "App/AppConstant";
class Partners extends Component {
  exportUI = (text) => {
    try {
      return <div className="exportAction pointer">{text}</div>;
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <PartnersStyle>
        <Menu />
        <div className="container">
          <Header />
          <div className="allDiv">
            <div className="headDiv">
              <h2>Partner's</h2>
              <div
                className="addButton pointer"
                onClick={() => this.props.history.push("/add-new-partner")}
              >
                <PlusOutlined />
              </div>
                
            </div>
            <div className="exportDiv">
              <div className="expo">
                {this.exportUI("COPY")}
                {this.exportUI("CSV")}
                {this.exportUI("EXCEL")}
                {this.exportUI("PDF")}
                {this.exportUI("PRINT")}
              </div>
              <div className="searchDiv">
                <Input
                  placeholder={PageConst.search}
                  suffix={<SearchOutlined />}
                />
              </div>
            </div>
            <Table type="partners" data={tableData} size={10} />
          </div>
        </div>
      </PartnersStyle>
    );
  }
}
export default Partners;
