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
    //   TODO Maybe move it to member resolver and get it via barcode at once
    checkActiveSubscriptions: async (
      _parent: unknown,
      args: { memberId: number },
      context: IPrismaContext
    ) =>
      context.prisma.subscriptions.findMany({
        where: {
          ownerId: args.memberId,
          isActive: true,
        },
        include: {
          owner: true,
        },
      }),
    //   TODO maybe add filter to filter suscriptions based on membership type
  },
}

export default Subscription
