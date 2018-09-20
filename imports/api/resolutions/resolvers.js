import Resolutions from './Resolutions'

/* this adds to the DB, don't duplicate anything! */
// Resolutions.insert({
//   name: `another resolution`
// })
export default {
  Query: {
    resolutions(obj, args, context) {
      console.log(context)
      return Resolutions.find({}).fetch()
    },
  },

  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name,
      })

      return Resolutions.findOne(resolutionId)
    },
  },
}
