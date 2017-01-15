import React from "react";
import { IndexLink, Link } from "react-router";
import { Menu } from 'semantic-ui-react'

export default class Header extends React.Component {
  render() {
    return (
      <Menu secondary>
        <Menu.Menu position="right">
          <Menu.Item>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </Menu.Item>
          <Menu.Item>
            <Link to="about" activeClassName="active">About</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
