import { mergeTypeDefs } from '@graphql-tools/merge'
import date from './date.graphql'
import member from './member.graphql'
import membership from './membership.graphql'

export default mergeTypeDefs([member, membership, date])
