import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ResolutionForm from './ResolutionForm'

const Home = ({ data }) => (
  <Fragment>
    <h1>{data.hello}</h1>
    <ResolutionForm />
    <ul>
      {!data.loading
        && data.resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
    </ul>
  </Fragment>
)

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home
