import React, { Component } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default class index extends Component {
  render() {
    const { style, className, tabOptions, type, defaultActiveKey } = this.props;

    return (
      <Tabs
        type={type}
        defaultActiveKey={defaultActiveKey}
        style={style}
        className={className}
      >
        {tabOptions &&
          tabOptions.map((options) => (
            <TabPane tab={options.tab} key={options.key}></TabPane>
          ))}
      </Tabs>
    );
  }
}
