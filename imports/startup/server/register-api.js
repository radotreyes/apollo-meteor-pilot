import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'

const HelloWorldSchema = `
  type Query {
    hello: String
  }
`
const typeDefs = [HelloWorldSchema, ResolutionsSchema]
const resolvers = {
  Query: {
    hello() {
      return `hello world`
    },
  },
}
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

createApolloServer({ schema })
