import React from "react";
import { IndexLink, Link } from "react-router";
import { Menu } from 'semantic-ui-react';

import style from "../../../styles/header.scss";


export default class Header extends React.Component {
  render() {
    return (
      <Menu id="navbar" secondary size="massive">
        <Menu.Item id="site-name">
          Learn from Open Source Projects
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <IndexLink to="/" activeClassName="active-menu-item">Home</IndexLink>
          </Menu.Item>
          <Menu.Item>
            <Link to="about" activeClassName="active-menu-item">About</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
