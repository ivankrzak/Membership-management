/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/naming-convention */
import { ApolloError } from 'apollo-errors'
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { createContext } from '../../api/graphql/context'
import Schema from '../../api/utils/schema'

const cors = Cors()

const apolloServer = new ApolloServer({
  schema: Schema,
  context: createContext,
  formatError: (error) => {
    if (!(error.originalError instanceof ApolloError)) {
      return new Error('Something went wrong.')
    }
    return error
  },
})

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
