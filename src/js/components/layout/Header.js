import React from "react";
import { IndexLink, Link } from "react-router";
import { Menu } from 'semantic-ui-react'

export default class Header extends React.Component {
  render() {
    return (
      <Menu secondary>
        <Menu.Menu position="right">
          <Menu.Item name="home">
            <IndexLink to="/">Home</IndexLink>
          </Menu.Item>
          <Menu.Item name="about">
            <Link to="about">About</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
