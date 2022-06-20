import { CreateMemberInput, QueryResolvers } from '../generated/resolvers-types'
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
  },
}

export default Member
