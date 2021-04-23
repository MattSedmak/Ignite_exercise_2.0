import React, { Component } from 'react';

import Counter from '../Components/Counter/Counter';
import Repo from '../Components/Repo/Repo';
import Spinner from '../Components/Spinner/Spinner';
import GlobalStyle from '../globalStyles';
import Wrapper from './AppStyles';
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
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://api.github.com/repos/' + this.state.repos[0])
      .then((response) => {
        this.setState({ repository: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      this.setState({ loading: true });
      axios
        .get(
          'https://api.github.com/repos/' + this.state.repos[this.state.count]
        )
        .then((response) => {
          this.setState({
            repository: response.data,
            error: false,
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({ error: true, loading: false });
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
      <Wrapper>
        <GlobalStyle />
        <h1>
          Dope <br /> Github <br /> Repositories.
        </h1>
        <Counter
          increment={this.incrementHandler}
          decrement={this.decrementHandler}
          count={this.state.count}
        />
        {this.state.loading ? <Spinner /> : [showRepo]}
      </Wrapper>
    );
  }
}

export default App;
