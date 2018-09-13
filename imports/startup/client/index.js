import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from '../../ui/App'

/* connect server environment to Apollo client */
const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl(`graphql`),
})

/* set up Apollo caching */
const cache = new InMemoryCache()

/* start Apollo client */
const client = new ApolloClient({
  link: httpLink,
  cache,
})

/* set up redux i mean apollo with React */
const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById(`app`))
})
