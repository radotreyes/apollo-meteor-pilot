/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props
    return (
      <Fragment>
        <h1>{data.hello}</h1>
        <ul>
          {!data.loading
            && data.resolutions.map(resolution => (
              <li key={resolution._id}>{resolution.name}</li>
            ))}
        </ul>
      </Fragment>
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
