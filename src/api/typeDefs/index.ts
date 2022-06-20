import { mergeTypeDefs } from '@graphql-tools/merge'
import date from './date.graphql'
import member from './member.graphql'
import personalData from './personalData.graphql'
import subscription from './subscription.graphql'

export default mergeTypeDefs([member, subscription, personalData, date])
