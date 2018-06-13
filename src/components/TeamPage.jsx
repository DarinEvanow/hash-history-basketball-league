import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';
import { getTeamsArticles } from '../api';
import Team from './Team';
import TeamLogo from './TeamLogo';

export default class TeamPage extends Component {
  state = {
    loading: true,
    articles: [],
  }

  componentDidMount () {
    getTeamsArticles(this.props.match.params.teamId)
      .then((articles) => {
        this.setState(() => ({
          loading: false,
          articles,
        }))
      })
  }

  render() {
    const { loading, articles } = this.state;
    const { match } = this.props;
    const { teamId } = match.params;

    return (
      <div>
        <Team id={teamId}>
          {(team) => team === null
            ? <h1>Loading</h1>
            : <div className='panel'>
                <TeamLogo id={teamId} />
                <h1 className='medium-header'>{team.name}</h1>
              </div>}
        </Team>
      </div>
    )
  }
}
