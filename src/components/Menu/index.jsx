import React, { Component } from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;

export default class index extends Component {
  render() {
    const {
      defaultSelectedKeys,
      defaultOpenKeys,
      mode,
      className,
      subMenu,
      menuItems,
      subMenuKey,
      subMenuTitle,
    } = this.props;
    return (
      <>
        {!subMenu ? (
          <Menu
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            mode={mode}
            className={className}
          >
            {menuItems &&
              menuItems.map((items) => (
                <Menu.Item key={items.key}>{items.label}</Menu.Item>
              ))}
          </Menu>
        ) : (
          <Menu
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            mode={mode}
            className={className}
          >
            <SubMenu key={subMenuKey} title={subMenuTitle}>
              {menuItems &&
                menuItems.map((items) => (
                  <Menu.Item key={items.key}>{items.label}</Menu.Item>
                ))}
            </SubMenu>
          </Menu>
        )}
      </>
    );
  }
}
