import Resolutions from './Resolutions'

/* this adds to the DB, don't duplicate anything! */
// Resolutions.insert({
//   name: `another resolution`
// })
export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch()
    },
  },

  Mutation: {
    createResolution() {
      // const resolutionId = Resolutions.insert({
      //   name,
      // })
    },
  },
}
