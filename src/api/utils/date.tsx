import { SubscriptionPeriod } from '../generated/resolvers-types'

const SubscriptionPeriodMapper: Record<SubscriptionPeriod, number> = {
  [SubscriptionPeriod.Three]: 3,
  [SubscriptionPeriod.Six]: 6,
  [SubscriptionPeriod.Twelve]: 12,
}

export const getDateYearFromNow = () =>
  new Date(new Date().setFullYear(new Date().getFullYear() + 1))

export const getDateYearFromDate = (from: Date) =>
  new Date(from.setFullYear(new Date().getFullYear() + 1))

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

export const getValidTillDateForProlongedTimeSubscription = ({
  startDate,
  period,
}: {
  startDate: Date
  period: SubscriptionPeriod
}) => {
  if (period === SubscriptionPeriod.Twelve) {
    return new Date(new Date().setFullYear(startDate.getFullYear() + 1))
  }

  return new Date(
    startDate.setMonth(new Date().getMonth() + SubscriptionPeriodMapper[period])
  )
}
