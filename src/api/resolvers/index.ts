import { mergeResolvers } from '@graphql-tools/merge'
import members from './members'

export default mergeResolvers([members])
