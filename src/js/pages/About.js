import React from "react";
import { Container, List } from "semantic-ui-react";

import style from "../../styles/about.scss";

export default class About extends React.Component {
  render() {
    return(
      <div class="ui container">
        <h1 class="ui center aligned header page-title">About</h1>
        <Container text>
          <p>
            Learning React has been as much about figuring out what to do with it
            as learning the API itself. So I've built a single-page app with
            React and Redux.
          </p>
          <p>
            I decided to name it "Learn From Open Source Projects", not a very
            original name. It is a tiny search engine which you can use to search
            for open source projects which can help you learn some awesome
            technology.
          </p>
          <p>
            I am aware this is a functionality of GitHub itself (and I'm reinventing
            the wheel) but I dind't want to build a To Do List app. This tiny app
            demonstrates a number of patterns and techniques which apply to larger
            projects, including how to:
          </p>
          <List as="ul" id="achievements-list">
            <List.Item as='li'>structure your app</List.Item>
            <List.Item as='li'>write ES6 code</List.Item>
            <List.Item as='li'>implement client-side routing</List.Item>
            <List.Item as='li'>organize the style in multiple SCSS files</List.Item>
            <List.Item as='li'>work with React and Redux concepts</List.Item>
            <List.Item as='li'>debounce multiple function calls</List.Item>
            <List.Item as='li'>work with SemanticUI</List.Item>
            <List.Item as='li'>write tests using Mocha, Enzyme and Chai</List.Item>
          </List>
          <p>
            The source code of the app is hosted on <a class="external-link" target="_blank" href="https://github.com/charlietango592/learn-from-os-code">GitHub</a>.
          </p>
          <p>
            Awesome React/Flux/Redux tutorials <a class="external-link" target="_blank" href="https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b">here</a>.
          </p>
          <p>
            Awesome React content written by <a class="external-link" target="_blank" href="http://jamesknelson.com">James K Nelson</a>
          </p>
        </Container>
      </div>
    )
  }
}
