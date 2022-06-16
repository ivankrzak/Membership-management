// /graphql/context.ts
import { PrismaClient } from '@prisma/client'
import prisma from '../../lib/prisma'

export type Context = {
  prisma: PrismaClient
}
// eslint-disable-next-line @typescript-eslint/require-await
export async function createContext(): Promise<Context> {
  return {
    prisma,
  }
}
