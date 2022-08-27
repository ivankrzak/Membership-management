import {
  getDateYearFromNow,
  getValidTillDateForProlongedTimeSubscription,
} from 'api/utils/date'
import { SubscriptionPeriod } from 'generated/generated-graphql'
import {
  ConfirmEntryInput,
  NewSubscriptionInput,
  QueryResolvers,
  SubscriptionType,
} from '../generated/resolvers-types'
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
    activeSubscriptionsByCardNumber: async (
      _parent: unknown,
      args: { cardNumber: number },
      context: IPrismaContext
    ) => {
      const data = await context.prisma.members.findFirst({
        where: {
          cardNumber: args.cardNumber,
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
          ...(type === SubscriptionType.Entry
            ? { entries: { decrement: 1 } }
            : {}),
        },
      })

      return true
    },
    newSubscription: async (
      _parent: unknown,
      args: { input: NewSubscriptionInput },
      context: IPrismaContext
    ) => {
      const { cardNumber, type, entries, period } = args.input

      const memberData = await context.prisma.members.findFirst({
        where: {
          cardNumber,
        },
        include: {
          subscriptions: true,
        },
      })

      const activeSubscription = memberData?.subscriptions.filter(
        ({ isActive }) => isActive === true
      )
      const hasActiveSubscription =
        activeSubscription && activeSubscription?.length > 0

      const hasEntryTypeSubscriptionActive =
        hasActiveSubscription &&
        activeSubscription[0].type === SubscriptionType.Entry
      const hasNewTimeSubscription = type === SubscriptionType.Time

      // Adds new entries to existing ENTRY type subscription and prolongs validity
      if (hasEntryTypeSubscriptionActive && type === SubscriptionType.Entry) {
        await context.prisma.subscriptions.update({
          where: {
            id: activeSubscription[0].id,
          },
          data: {
            entries: { increment: entries },
            validTill: getDateYearFromNow(),
          },
        })
        return true
      }

      // Create new entry in SUBSCRIPTION table with new SUBSCRIPTION  that
      // will be valid from end date of the current active subscription does
      // not matter if the current SUBSCRIPTION is TIME or ENTRY based
      if (hasActiveSubscription) {
        const activeSubscriptionValidTill = activeSubscription[0].validTill

        await context.prisma.subscriptions.create({
          data: {
            type,
            ...(hasNewTimeSubscription ? { period } : { entries }),
            validTill: getValidTillDateForProlongedTimeSubscription({
              startDate: new Date(String(activeSubscriptionValidTill)),
              period:
                hasNewTimeSubscription && period
                  ? period
                  : SubscriptionPeriod.Twelve,
            }),
            isActive: !hasActiveSubscription,
            ownerId: memberData && memberData.id,
          },
        })
        return true
      }

      return false
    },
  },
}

export default Subscription
