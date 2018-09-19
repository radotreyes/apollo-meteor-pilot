import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ResolutionForm from './ResolutionForm'

const Home = ({ data: { hello, loading, resolutions } }) => (
  <Fragment>
    <h1>{hello}</h1>
    <ResolutionForm />
    <ul>
      {!loading
        && resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
    </ul>
  </Fragment>
)

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home
