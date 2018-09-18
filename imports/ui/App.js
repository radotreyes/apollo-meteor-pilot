import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Home from './components/Home'

class App extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home data={data} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const RootQuery = gql`
  {
    hello
    resolutions {
      _id
      name
    }
  }
`
export default graphql(RootQuery)(App)
