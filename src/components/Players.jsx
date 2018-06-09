import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { parse } from 'query-string';
import { slug } from 'slug';
import { getPlayers } from '../api';
import Sidebar from './Sidebar';

export default class Players extends Component {
  state = {
    players: [],
    loading: true,
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
        players,
        loading: false,
      })))
  }

  render() {
    return (
      <div className='container two-column'>
        {JSON.stringify(this.state)}
      </div>
    )
  }
}