import Prisma from 'api/prisma/client'

const getMemberIdByCardNumber = ({ cardNumber }: { cardNumber: number }) =>
  Prisma.members.findFirst({
    where: {
      cardNumber,
    },
    select: {
      id: true,
    },
  })

export default getMemberIdByCardNumber
