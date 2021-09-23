import React, { Component } from "react";
import TableStyle from "./style";
import { Table, Image } from "antd";
import {
  DashOutlined,
} from "@ant-design/icons";

import {
  editPen,
  deleteImg,
  infoImg,
  view,
  edit,
  wallet,
  prospect,
  sales,
  deleteSvg,
} from "components/Images";
import { PageConst } from "App/AppConstant";
import { RenderDrop } from "components/Form";

const { Column } = Table;

class TableUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: { current: 1, pageSize: 5 },
    };
  }
  handleTable = (pagination) => this.setState({ pagination });
  StatusUI = (record) => {
    try {
      return (
        <div className="statusUI">
          <span className={record.status ? "green" : "red"}>
            {record.status ? "Active" : "Deactive"}
          </span>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  adminActUI = (img, text) => {
    try {
      return (
        <>
          <Image src={img} preview={false} width={15} />
          <span className="text">{text}</span>
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  adminActionUI = (record, type) => {
    try {
      return (
        <div className="actionUI">
          <RenderDrop item={<DashOutlined className="dash" />}>
            {type === "partners" && (
              <div className="actionBtn" onClick={() => this.props.view()}>
                {this.adminActUI(view, PageConst.view)}
              </div>
            )}
            <div className="actionBtn" onClick={() => this.props.edite()}>
              {this.adminActUI(edit, PageConst.edit)}
            </div>
            {type === "partners" && (
              <>
                <div className="actionBtn" onClick={() => this.props.wallet()}>
                  {this.adminActUI(wallet, PageConst.wallet)}
                </div>
                <div
                  className="actionBtn"
                  onClick={() => this.props.prospect()}
                >
                  {this.adminActUI(prospect, PageConst.prospect)}
                </div>
                <div className="actionBtn" onClick={() => this.props.sales()}>
                  {this.adminActUI(sales, PageConst.sales)}
                </div>
              </>
            )}
            <div className="actionBtn" onClick={() => this.props.delete()}>
              {this.adminActUI(deleteSvg, PageConst.delete)}
            </div>
          </RenderDrop>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };

  action = (record, type) => {
    try {
      return (
        <div className="actionUI">
          <div>
            <Image
              className="pointer"
              src={infoImg}
              preview={false}
              width={13}
            />
          </div>
          <div className="edite_box">
            <Image
              className="pointer"
              src={editPen}
              preview={false}
              width={13}
            />
          </div>
          <div>
            <Image
              className="pointer"
              src={deleteImg}
              preview={false}
              width={13}
            />
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  columns = () => {
    try {
      const { type, print, tab } = this.props;
      return (
        <>
          {type === "MyProspect" && (
            <Column title={PageConst.ProName} dataIndex={"name"} />
          )}
          {type === "MyLeads" && (
            <Column title={PageConst.leadName} dataIndex={"name"} />
          )}
          {(type === "MyLeads" || type === "MyProspect") && (
            <Column title={PageConst.contNum} dataIndex={"number"} />
          )}
          {type === "MyDemo" && (
            <>
              <Column title={PageConst.cusName} dataIndex={"name"} />
              <Column title={PageConst.pro} dataIndex={"name"} />
            </>
          )}
          {type === "sales" && (
            <>
              <Column title={PageConst.srNo} dataIndex={"key"} />
              <Column title={PageConst.liceId} dataIndex={"li"} />
              <Column title={PageConst.cusName} dataIndex={"cn"} />
              <Column title={PageConst.subType} dataIndex={"st"} />
              <Column title={PageConst.expIn} dataIndex={"ei"} />
            </>
          )}
          {type === "wallet" && (
            <>
              <Column title={"Transaction ID"} dataIndex={"key"} />
              <Column title={"Details"} dataIndex={"details"} />
              <Column title={"Transaction Type"} dataIndex={"trType"} />
              <Column title={"Date"} dataIndex={"date"} />
              <Column title={"Amount"} dataIndex={"amount"} />
            </>
          )}
          {(type === "partners" || type === "userList") && (
            <>
              <Column
                title={PageConst.srNo}
                dataIndex={"key"}
                className="center"
              />
              {type === "partners" && (
                <>
                  <Column
                    title={"Partner"}
                    dataIndex={"partnername"}
                    className="center"
                  />
                  <Column
                    title={PageConst.status}
                    className="center"
                    render={(record) => this.StatusUI(record)}
                  />
                </>
              )}
              {type === "userList" && (
                <>
                  <Column
                    title={"User Name"}
                    dataIndex={"username"}
                    className="center"
                  />
                  <Column
                    title={"Email id"}
                    dataIndex={"emailid"}
                    className="center"
                  />
                </>
              )}
              <Column
                className="center"
                title={PageConst.action}
                render={(record, i) => this.adminActionUI(record, type)}
              />
            </>
          )}

          {type !== "wallet" && type !== "partners" && type !== "userList" && (
            <Column
              title={PageConst.action}
              render={(record, i) => this.action(record, type)}
            />
          )}
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  //   searchData = () => {
  //     try {
  //       const { data, search, type } = this.props;
  //       let dData = [];
  //       let display = [];
  //       data &&
  //         data.length > 0 &&
  //         data.forEach((a) => {
  //           display.push(
  //             a.name,
  //             a.from,
  //             a.to,
  //             a.code,
  //             a.location,
  //             a.designation,
  //             a.isdisable === 0 ? PageConst.active : PageConst.disable
  //           );
  //           type === "porter" && display.push(a.number, a.email);
  //           let array = [];
  //           display.forEach((e) => {
  //             if (e && e !== null && e.toString().length > 0) array.push(e);
  //           });
  //           let matches = array.filter((s) =>
  //             s.toString().toLowerCase().includes(search.toString().toLowerCase())
  //           );
  //           display = [];
  //           if (matches && matches.length > 0) dData.push(a);
  //         });
  //       return dData;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  render() {
    const { pagination } = this.state;
    const { data, search, size } = this.props;
    let display = !search || search.trim() === "" ? data : this.searchData();
    display &&
      display.forEach((a, i) => {
        a.key = i + 1;
      });
    let pageSize = size ? size : 5;
    return (
      <TableStyle>
        <Table
          bordered
          //   rowClassName={!print ? "anime" : ""}
          pagination={
            display.length > pageSize ? { pageSize: pageSize } : false
          }
          onChange={this.handleTable}
          dataSource={display}
        >
          {this.columns()}
        </Table>
      </TableStyle>
    );
  }
}
export default TableUI;
