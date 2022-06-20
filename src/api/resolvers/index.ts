import { mergeResolvers } from '@graphql-tools/merge'
import members from './members'
import subscriptions from './subscription'

export default mergeResolvers([members, subscriptions])
