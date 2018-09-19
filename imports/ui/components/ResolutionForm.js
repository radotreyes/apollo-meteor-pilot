import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const ResolutionMutation = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
      name
    }
  }
`

class ResolutionForm extends Component {
  static propTypes = {
    createResolution: PropTypes.func.isRequired,
  }

  state = {
    input: ``,
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { input } = this.state
    const { createResolution } = this.props
    // eslint-disable-next-line
    createResolution({
      variables: {
        name: input,
      },
    })
      // .then(({ data }) => refetch(data))
      .catch(error => console.log(error))
    this.setState({
      input: ``,
    })
  }

  render() {
    const { input } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={input}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default graphql(ResolutionMutation, {
  name: `createResolution`,
  options: {
    refetchQueries: [`RootQuery`],
  },
})(ResolutionForm)
