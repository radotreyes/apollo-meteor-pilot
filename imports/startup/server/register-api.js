import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'
// hi
/* any other individual schemas */
const HelloWorldSchema = `
  type Query {
    hello: String
    resolutions: [Resolution]
  }
`

/* combine typeDefs */
const typeDefs = [HelloWorldSchema, ResolutionsSchema]

/* combine resolvers */
const HiResolvers = {
  Query: {
    hello() {
      return `hello world`
    },
  },
}

const resolvers = merge(HiResolvers, ResolutionsResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

createApolloServer({ schema })
