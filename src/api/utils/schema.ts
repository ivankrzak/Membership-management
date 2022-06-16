import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from '../resolvers'
import mergedTypeDefs from '../typeDefs'

const Schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers,
})

export default Schema
