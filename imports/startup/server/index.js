import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Query {
    hello: String
  }
`
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
