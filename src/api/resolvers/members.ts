import { CreateMemberInput, QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Member: QueryResolvers = {
  Query: {
    members: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.member.findMany({
        include: {
          memberships: true,
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
        firstName,
        lastName,
        gender,
        address,
        email,
        telNumber,
        isStudent,
        country,
      } = args.input
      return context.prisma.member.create({
        data: {
          firstName,
          lastName,
          address,
          email,
          telNumber,
          isStudent,
          gender,
          memberships: {},
          country,
        },
      })
    },
  },
}

export default Member
