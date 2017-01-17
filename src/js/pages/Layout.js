import React from "react";

import Header from "../components/layout/Header";

import style from "../../styles/main.scss";

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
