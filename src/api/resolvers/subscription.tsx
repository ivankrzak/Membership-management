import { QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Subscription: QueryResolvers = {
  Query: {
    subscriptions: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.subscriptions.findMany({
        include: {
          owner: true,
        },
      }),
    subscriptionsByMemberId: async (
      _parent: unknown,
      args: { memberId: number },
      context: IPrismaContext
    ) =>
      context.prisma.subscriptions.findMany({
        where: {
          ownerId: args.memberId,
        },
        include: {
          owner: true,
        },
      }),
  },
}

export default Subscription
