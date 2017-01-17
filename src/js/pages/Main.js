import React from "react";
import { connect } from "react-redux"
import { Input, Button, Icon, Loader, Container } from "semantic-ui-react";

import Project from "../components/Project";
import EndOfList from "../components/EndOfList";
import { fetchProjects, hideProjects } from "../actions/projectsActions";

@connect((store) => {
  console.log("Connected to the store", store);
  return {
    fetching: store.fetching,
    error: store.error,
    projects: store.projects,
    showResults: store.showResults,
  };
})
export default class Main extends React.Component {

  handleChange(event) {
    const technology = event.target.value;
    if (technology != "") {
      console.log("Fetching projects: ", technology);
      this.props.dispatch(fetchProjects(technology));
    } else {
      this.props.dispatch(hideProjects());
    }
  }

  render() {
    const { fetching, fetched, projects, showResults } = this.props;

    const mappedProjects = projects.map(project => <Project key={project.id} projectName={project.full_name}
      creationDate={project.created_at} projectDescription={project.description} forks={project.forks}
      stars={project.stargazers_count} url={project.clone_url} user={`@${project.owner.login}`}></Project>);

    return(
      <div class="ui container">
        <h1 class="ui center aligned header page-title">I want to learn:</h1>
        <div id="searchbox-div">
          <Input id="searchbox" class="ui center aligned header"
            placeholder='type in some awesome technology you want to learn'
            onChange={this.handleChange.bind(this)} />
        </div>
        <div id="loader-div">
          <Loader size="massive" active={fetching ? true : false}>Fetching some awesome projects.</Loader>
        </div>
        <div id="results-div" ref="results">
          {showResults ? mappedProjects : null}
        </div>
        {showResults ? <EndOfList /> : null}
      </div>
    );
  }
}
