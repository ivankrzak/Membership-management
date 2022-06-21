import { SubscriptionPeriod } from '../generated/resolvers-types'

const SubscriptionPeriodMapper: Record<SubscriptionPeriod, number> = {
  [SubscriptionPeriod.Three]: 3,
  [SubscriptionPeriod.Six]: 6,
  [SubscriptionPeriod.Twelve]: 12,
}

export const getDateYearFromNow = () =>
  new Date(new Date().setFullYear(new Date().getFullYear() + 1))

export const getDateFromSubscriptionPeriod = (period: SubscriptionPeriod) => {
  if (period === SubscriptionPeriod.Twelve) {
    return getDateYearFromNow()
  }

  return (
    period &&
    new Date(
      new Date().setMonth(
        new Date().getMonth() + SubscriptionPeriodMapper[period]
      )
    )
  )
}
