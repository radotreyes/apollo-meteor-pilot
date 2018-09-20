import React, { Fragment } from 'react'
import Meteor from 'meteor/meteor'
import PropTypes from 'prop-types'

import AuthForm from './AuthForm'
import ResolutionForm from './ResolutionForm'

const Home = ({ data }) => {
  console.log(data)
  return (
    <Fragment>
      <h1>{data.hello}</h1>
      <AuthForm action="signup" />
      <AuthForm action="login" />
      <ResolutionForm />
      <ul>
        {!data.loading
          && data.resolutions.map(resolution => (
            <li key={resolution._id}>{resolution.name}</li>
          ))}
      </ul>
      <button type="button" onClick={() => Meteor.logOut()}>
        Logout
      </button>
    </Fragment>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home
