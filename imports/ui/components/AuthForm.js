import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types'
import { Accounts } from 'meteor/accounts-base'

export default class AuthForm extends Component {
  static propTypes = {
    action: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    const { action } = this.props
    this.state = {
      email: ``,
      password: ``,
      action: action
        .split(``)
        .map((c, i) => (!i ? c.toUpperCase() : c))
        .join(``),
    }
  }

  performAuthAction = (email, password) => {
    const { action } = this.props
    if (action === `login`) {
      Meteor.loginWithPassword(email, password)
    } else if (action === `signup`) {
      Accounts.createUser({
        email,
        password,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.performAuthAction(email, password)
    this.setState({
      email: ``,
      password: ``,
    })
  }

  handleTextInput = ({ target: { value } }) => {
    this.setState({
      email: value,
    })
  }

  handlePasswordInput = ({ target: { value } }) => {
    this.setState({
      password: value,
    })
  }

  render() {
    const { email, password, action } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleTextInput} value={email} />
        <input
          type="password"
          onChange={this.handlePasswordInput}
          value={password}
        />
        <input type="submit" value={action} />
      </form>
    )
  }
}

// const UserQuery = gql`
//   query UserQuery {
//     users {
//       email
//       password
//     }
//   }
// `
