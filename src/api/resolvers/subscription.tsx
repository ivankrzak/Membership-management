import { SubscriptionType } from '@prisma/client'
import { ConfirmEntryInput, QueryResolvers } from '../generated/resolvers-types'
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
    activeSubscriptionsByBarcode: async (
      _parent: unknown,
      args: { barcode: number },
      context: IPrismaContext
    ) => {
      const data = await context.prisma.members.findFirst({
        where: {
          barcode: args.barcode,
        },
        include: {
          subscriptions: { where: { isActive: true } },
        },
      })
      return data
    },
  },
  Mutation: {
    confirmEntry: async (
      _parent: unknown,
      args: { input: ConfirmEntryInput },
      context: IPrismaContext
    ) => {
      const { subscriptionId, type } = args.input

      await context.prisma.subscriptions.update({
        where: {
          id: subscriptionId,
        },
        data: {
          owner: { update: { visits: { increment: 1 } } },
          ...(type === SubscriptionType.ENTRY
            ? { entries: { decrement: 1 } }
            : {}),
        },
      })

      return true
    },
  },
}

export default Subscription
