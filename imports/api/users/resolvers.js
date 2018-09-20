import Users from './Users'

/* this adds to the DB, don't duplicate anything! */
// Resolutions.insert({
//   name: `another resolution`
// })
export default {
  Query: {
    users(obj, args, context) {
      return Users.find({}).fetch()
    },
  },

  Mutation: {
    registerUser(obj, { email, password }, context) {
      const userId = Users.insert({
        email,
        password,
      })

      return Users.findOne(userId)
    },
  },
}
