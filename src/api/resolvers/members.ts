import {
  getDateFromSubscriptionPeriod,
  getDateYearFromDate,
  getDateYearFromNow,
} from 'api/utils/date'
import {
  CreateMemberInput,
  QueryResolvers,
  UpdateMemberInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Member: QueryResolvers = {
  Query: {
    members: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.members.findMany({
        include: {
          subscriptions: true,
          personalData: true,
        },
      }),
    member: async (
      _parent: unknown,
      args: { barcode: number },
      context: IPrismaContext
    ) =>
      context.prisma.members.findFirst({
        where: {
          barcode: args.barcode,
        },
        include: {
          subscriptions: true,
          personalData: true,
        },
      }),
    getActiveSubscriptions: async (
      _parent: unknown,
      args: { barcode: number },
      context: IPrismaContext
    ) => {
      const result = await context.prisma.members.findFirst({
        where: {
          barcode: args.barcode,
        },
        select: {
          subscriptions: { where: { isActive: true } },
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return result?.subscriptions
    },
  },
  Mutation: {
    createMember: (
      _parent: unknown,
      args: { input: CreateMemberInput },
      context: IPrismaContext
    ) => {
      const { memberData, personalData, subscriptionData } = args.input

      const canCreateSubscription =
        subscriptionData &&
        subscriptionData.type &&
        (subscriptionData.entries || subscriptionData.period)
      return context.prisma.members.create({
        data: {
          ...memberData,
          hasActiveMembership: true,
          membershipValidTill: getDateYearFromNow(),
          subscriptions: canCreateSubscription
            ? {
                create: {
                  ...subscriptionData,
                  validTill:
                    subscriptionData.period &&
                    getDateFromSubscriptionPeriod(subscriptionData.period),
                },
              }
            : {},
          personalData: {
            create: {
              ...personalData,
            },
          },
        },
      })
    },
    updateMember: (
      _parent: unknown,
      args: { input: UpdateMemberInput; memberId: number },
      context: IPrismaContext
    ) => {
      const { memberData, personalData } = args.input
      return context.prisma.members.update({
        where: {
          id: args.memberId,
        },
        data: {
          ...memberData,
          personalData: {
            update: {
              ...personalData,
            },
          },
        },
      })
    },
    prolongMembership: async (
      _parent: unknown,
      args: { memberId: number },
      context: IPrismaContext
    ) => {
      const memberData = await context.prisma.members.findFirst({
        where: {
          id: args.memberId,
        },
        select: {
          hasActiveMembership: true,
          membershipValidTill: true,
        },
      })

      await context.prisma.members.update({
        where: {
          id: args.memberId,
        },
        data: {
          membershipValidTill: memberData?.hasActiveMembership
            ? getDateYearFromDate(memberData?.membershipValidTill)
            : getDateYearFromNow(),
        },
      })

      return true
    },
    deleteMember: async (
      _parent: unknown,
      args: { memberId: number },
      context: IPrismaContext
    ) => {
      const deleteRelatedSubscriptions =
        context.prisma.subscriptions.deleteMany({
          where: {
            ownerId: args.memberId,
          },
        })
      const deletePersonalData = context.prisma.personalData.delete({
        where: {
          ownerId: args.memberId,
        },
      })
      const deleteMember = context.prisma.members.delete({
        where: {
          id: args.memberId,
        },
      })

      await context.prisma.$transaction([
        deleteMember,
        deletePersonalData,
        deleteRelatedSubscriptions,
      ])

      return true
    },
    blockMember: async (
      _parent: unknown,
      args: { isBlocked: boolean; memberId: number },
      context: IPrismaContext
    ) => {
      await context.prisma.members.update({
        where: {
          id: args.memberId,
        },
        data: {
          isBlocked: args.isBlocked,
        },
      })
      return true
    },
  },
}

export default Member
