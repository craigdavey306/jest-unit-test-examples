/**
 * Determines if an individual is eligible for a discount.
 * In order to qualify for a discount, the individual must meet the following criteria:
 * - is aged 65 or older AND be a member
 * - OR have a coupon
 * @param age The individual's age
 * @param isMember True if the individual is a member
 * @param hasCoupon True if the individual has a coupon
 * @returns Returns true if the person is eligible for a discount and false otherwise.
 *
 * This code was created to demonstrate Modified Condition / Decision Coverage (MC/DC).
 * @see {@link https://en.wikipedia.org/wiki/Modified_condition/decision_coverage}
 */
export function isEligibleForDiscount(
  age: number,
  isMember: boolean,
  hasCoupon: boolean
) {
  return (age >= 65 && isMember) || hasCoupon;
}

/**
 * Calculates a discount for a given amount.
 * @param amount Original price
 * @returns The discount that will be subtracted from the original price.
 */
export function calculateDiscount(amount: number) {
  // No discounts for amounts less than 1!
  if (amount < 1) {
    return 0;
  }

  // Amounts less than 100 receive a 10% discount.
  if (amount < 100) {
    return 0.1 * amount;
  }

  // Calculate a 20% discount for amounts between 100 and 400.
  if (amount < 500) {
    return 0.2 * amount;
  }

  // All other amounts have a 30% discount.
  return 0.3 * amount;
}
