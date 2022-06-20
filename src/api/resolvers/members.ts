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
  },
  Mutation: {
    createMember: (
      _parent: unknown,
      args: { input: CreateMemberInput },
      context: IPrismaContext
    ) => {
      const {
        barcode,
        firstName,
        lastName,
        gender,
        address,
        email,
        telNumber,
        isStudent,
        country,

        type,
        entries,
        period,
      } = args.input
      const canCreateSubscription = type && (entries || period)
      return context.prisma.members.create({
        data: {
          barcode,
          firstName,
          lastName,
          isStudent,
          // Add dynamic DATE calculation
          hasActiveMembership: true,
          membershipValidTill: new Date(),
          subscriptions: canCreateSubscription
            ? { create: { type, entries, period, validTill: new Date() } }
            : {},
          personalData: {
            create: {
              address,
              country,
              telNumber,
              email,
              gender,
            },
          },
        },
      })
    },
    updateMember: (
      _parent: unknown,
      args: { data: UpdateMemberInput; memberId: number },
      context: IPrismaContext
    ) => {
      const {
        barcode,
        firstName,
        lastName,
        gender,
        address,
        email,
        telNumber,
        isStudent,
        country,
        hasActiveMembership,
        membershipValidTill,
      } = args.data
      return context.prisma.members.update({
        where: {
          id: args.memberId,
        },
        data: {
          barcode,
          firstName,
          lastName,
          isStudent,
          // Add dynamic DATE calculation
          hasActiveMembership,
          membershipValidTill,
          personalData: {
            update: {
              address,
              country,
              telNumber,
              email,
              gender,
            },
          },
        },
      })
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
  },
}

export default Member
