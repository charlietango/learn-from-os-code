import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default class Layout extends React.Component {
  render() {
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {this.props.projectName}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {this.props.creationDate}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.projectDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='fork' />
            {this.props.forks}
          </a>
          <a>
            <Icon name='star' />
            {this.props.stars}
          </a>
          <a class="right floated" href={this.props.url}>
            <span>{this.props.user} </span>
            <Icon name='external'></Icon>
          </a>
        </Card.Content>
      </Card>
    );
  }
}
