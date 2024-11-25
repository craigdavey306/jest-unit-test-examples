import { describe, it, expect } from '@jest/globals';
import { calculateDiscount, isEligibleForDiscount } from '../discounts';

interface EligibleForDiscountTestCase {
  age: number;
  isMember: boolean;
  hasCoupon: boolean;
  expected: boolean;
}

describe('isEligibleForDiscount function tests', () => {
  /**
   * The following is an example of using Modified Condition / Decision Coverage (MC/DC)
   * in determining the test cases for the different conditions in the isEligibleForDiscount()
   * function.
   *
   * Evaluating each condition and it's impact on the outcome so that one
   * independently affects the test cases below where:
   *
   * Condition A = age >= 65
   * Condition B = isMember
   * Condition C = hasCoupon
   *
   */
  it.each<EligibleForDiscountTestCase>([
    { age: 65, isMember: true, hasCoupon: false, expected: true },
    { age: 66, isMember: false, hasCoupon: true, expected: true },
    { age: 65, isMember: false, hasCoupon: false, expected: false },
    { age: 64, isMember: true, hasCoupon: false, expected: false },
  ])(
    'should calculate the correct discount value given the following values: age = $age, isMember = $isMember, hasCoupon = $hasCoupon, and expected = $expected',
    ({ age, isMember, hasCoupon, expected }) => {
      const result = isEligibleForDiscount(age, isMember, hasCoupon);

      if (expected) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    }
  );
});

interface DiscountTestCase {
  amount: number;
  expected: number;
}

describe('calculateDiscount function tests', () => {
  /**
   * The following is an example of equivalence partitioning and boundary testing.
   */
  it.each<DiscountTestCase>([
    { amount: 0.99, expected: 0 },
    { amount: 1, expected: 0.1 },
    { amount: 99.99, expected: 9.999 },
    { amount: 100, expected: 20 },
    { amount: 499.99, expected: 99.998 },
    { amount: 500, expected: 150 },
  ])(
    'should calculate the correct discounted amount given the amount $amount',
    ({ amount, expected }) => {
      const discountedAmount = calculateDiscount(amount);

      expect(discountedAmount).toBe(expected);
    }
  );
});
