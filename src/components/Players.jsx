import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { parse } from 'query-string';
import slug from 'slug';
import { getPlayers } from '../api';
import Sidebar from './Sidebar';
import Player from './Player';

export default class Players extends Component {
  state = {
    loading: true,
    players: [],
  }

  componentDidMount () {
    const { location } = this.props
    location.search
      ? this.fetchPlayers(parse(location.search).teamId)
      : this.fetchPlayers()
  }

  fetchPlayers = (teamId) => {
    getPlayers(teamId)
      .then((players) => this.setState(() => ({
        loading: false,
        players,
      })))
  }

  render () {
    const { players, loading } = this.state;
    const { match, location } = this.props;

    return (
      <div className='container two-column'>
        <Sidebar
          loading={loading}
          title='Players'
          list={players.map((player) => player.name)}
          {...this.props}
        />

        {loading === false && location.pathname === '/players'
          ? <div className='sidebar-instruction'>Select a Player</div>
          : null}

        <Route path={`${match.url}/:playerId`} render={({match}) => {
          if (loading === true) return null

          return (
            <Player {...players.find((player) => slug(player.name) === match.params.playerId)} />
          )
        }} />
      </div>
    )
  }
}
