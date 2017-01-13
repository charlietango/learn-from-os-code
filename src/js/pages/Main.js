import React from "react";
import { connect } from "react-redux"
import { Input, Button, Icon } from "semantic-ui-react";

import Project from "../components/Project";
import { fetchProjects } from "../actions/projectsActions";

@connect((store) => {
  console.log("Connected to the store", store);
  return {
    fetching: store.fetching,
    fetched: store.fetched,
    error: store.error,
    projects: store.projects,
  };
})
export default class Main extends React.Component {

  handleChange(event) {
    const technology = event.target.value;
    console.log("Fetching projects: ", technology);
    this.props.dispatch(fetchProjects(technology));
  }

  render() {
    const { fetching, fetched, projects } = this.props;

    const mappedProjects = projects.map(project => <Project key={project.id} projectName={project.full_name}
      creationDate={project.created_at} projectDescription={project.description} forks={project.forks}
      stars={project.stargazers_count} url={project.clone_url} user={"@" + project.owner.login}></Project>);

    return(
      <div class="ui container">
        <h1 class="ui center aligned header">I want to learn:</h1>
        <div id="searchbox-div">
          <Input id="searchbox" class="ui center aligned header"
            placeholder='Awesome technology you want to learn'
            onChange={this.handleChange.bind(this)}></Input>
          {mappedProjects}
        </div>
      </div>
    );
  }
}
