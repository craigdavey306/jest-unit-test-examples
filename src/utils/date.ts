/**
 * Determines if a year is a leap year or not. Leap years are
 * - divisible by 4,
 * - and divisible by 400,
 * - and not divisible by 100
 * @param year {number} Year being evaluated
 * @returns True if the year is a leap year and false if not
 */
export function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

/**
 * Determines the number of days in a month based on the year.
 * @param month {number} Number representing the month. January is month 0 while December is month 11.
 * @param year {number} Year in which the month is being evaluated.
 * @returns The number of days in the month for the year.
 */
export function getDaysInMonth(month: number, year: number): number {
  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  ) {
    return 31;
  }

  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1 && isLeapYear(year)) {
    return 29;
  }

  return 28;
}
