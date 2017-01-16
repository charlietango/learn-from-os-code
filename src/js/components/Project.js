import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

export default class Layout extends React.Component {
  render() {
    return(
      <Card fluid color="green">
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
          <div class="right floated">
            <span>owner: {this.props.user}</span>
          <Button class="github-button" color="green" inverted size="tiny" target="_blank" href={this.props.url}>
              Go to
              <Icon class="github-icon" name="github" />
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
