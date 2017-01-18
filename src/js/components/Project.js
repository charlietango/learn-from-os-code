import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

import style from "../../styles/project.scss";


export default class Layout extends React.Component {
  render() {
    const year = this.props.creationDate ? this.props.creationDate.split("-")[0] : "";
    return(
      <Card fluid color="green">
        <Card.Content>
          <Card.Header>
            {this.props.projectName}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {`Repo created in ${year}`}
            </span>
          </Card.Meta>
          <Card.Description>
            {`Description: ${this.props.projectDescription}`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={this.props.url} target="_blank">
            <Icon name='fork' />
            {this.props.forks}
          </a>
          <a id="stars" href={this.props.url} target="_blank">
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
