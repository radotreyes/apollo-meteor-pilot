import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createResolution = gql`
  mutation createResolution {
    createResolution {
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
    // eslint-disable-next-line
    this.props.createResolution()
    this.setState({
      input: ``,
    })
  }

  render() {
    const { input } = this.state
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input type="text" value={input} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default graphql(createResolution, {
  name: `createResolution`,
})(ResolutionForm)
