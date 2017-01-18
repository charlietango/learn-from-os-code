import React from "react";

export default class Ahoi extends React.Component {
  render() {
    return (
      <h4 id="endOfList" class="ui center aligned header">{this.props.content}</h4>
    );
  }
}
