import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const App = ({ data }) => <h1>{data.hello}</h1>
App.propTypes = {
  data: PropTypes.object.isRequired,
}

const RootQuery = gql`
  {
    hello
  }
`
export default graphql(RootQuery)(App)
