import React, { PureComponent } from 'react';

import api from '../../services/api';
import { Container } from './styles';

class Repository extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      repository: {},
      issues: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}`);

    const [repository, issues] = await Promise.all([
      await api.get(`/repos/${repoName}`),
      await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  componentDidUpdate() {}

  render() {
    const { repository, issues, loading } = this.state;
    return (
      <Container>
        <h1>Repository</h1>
      </Container>
    );
  }
}

export default Repository;
