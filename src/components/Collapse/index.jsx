import React, { Component } from "react";
import { Collapse } from "antd";
import { CollapseStyle } from "./style";

const { Panel } = Collapse;

export default class index extends Component {
  render() {
    const { panelData } = this.props;
    return (
      <CollapseStyle>
        <Collapse accordion>
          {panelData &&
            panelData.map((data) => (
              <Panel header={data.header} key={data.key}>
                {data.body}
              </Panel>
            ))}
        </Collapse>
      </CollapseStyle>
    );
  }
}
