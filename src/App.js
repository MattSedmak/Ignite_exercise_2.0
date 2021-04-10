import React, { Component } from 'react';

import Counter from './Components/Counter/Counter';
import Repo from './Components/Repo/Repo';
// import styled from 'styled-components';
import axios from 'axios';

class App extends Component {
  state = {
    repository: {},
    repos: [
      'eslint/eslint',
      'noaignite/front-end-questions',
      'babel/babel',
      'webpack/webpack',
      'storybooks/storybook',
      'facebook/react',
      'reactjs/redux',
      'expressjs/express',
    ],
    count: 0,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/repos/' + this.state.repos[0])
      .then((response) => {
        this.setState({ repository: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      // console.log('testing');
      axios
        .get(
          'https://api.github.com/repos/' + this.state.repos[this.state.count]
        )
        .then((response) => {
          this.setState({ repository: response.data, error: false });
        })
        .catch((error) => {
          this.setState({ error: true });
        });
    }
  }

  incrementHandler = () => {
    if (this.state.count === this.state.repos.length - 1) return;
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementHandler = () => {
    if (this.state.count === 0) return;
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    let showRepo = <p>Oops! Something went wrong</p>;

    if (!this.state.error) {
      showRepo = (
        <Repo
          fullName={this.state.repository.full_name}
          description={this.state.repository.description}
          stars={this.state.repository.stargazers_count}
        />
      );
    }
    return (
      <div className='App'>
        <h1>Github Repos</h1>
        <Counter
          increment={this.incrementHandler}
          decrement={this.decrementHandler}
          count={this.state.count}
        />

        {showRepo}
      </div>
    );
  }
}

export default App;
