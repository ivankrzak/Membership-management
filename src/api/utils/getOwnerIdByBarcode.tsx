import Prisma from 'api/prisma/client'

const getMemberIdByBarcode = ({ barcode }: { barcode: number }) =>
  Prisma.members.findFirst({
    where: {
      barcode,
    },
    select: {
      id: true,
    },
  })

export default getMemberIdByBarcode
