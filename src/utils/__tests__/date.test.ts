import { describe, it, expect } from '@jest/globals';
import { isLeapYear, getDaysInMonth } from '../date';

describe('isLeapYear function tests', () => {
  it('should determine a year that is divisible by 4 and 100 is not a leap year', () => {
    const year = 1900;

    const result = isLeapYear(year);
    expect(result).toBeFalsy();
  });

  it('should determine a year that is divisible by 4 and 400 is a leap year', () => {
    const year = 2000;

    const result = isLeapYear(year);
    expect(result).toBeTruthy();
  });

  it('should determine a year that is divisible by 4 and not by 100 is a leap year', () => {
    const year = 1996;

    const result = isLeapYear(year);
    expect(result).toBeTruthy();
  });

  it('should determine that a year that is not divisible by 4 is not a leap year', () => {
    const year = 2023;

    const result = isLeapYear(year);
    expect(result).toBeFalsy();
  });
});

describe('getDaysInMonth function tests', () => {
  it('should calculate February has 28 days when not in a leap year', () => {
    const year = 2023;
    const month = 1; // February
    const expected = 28;

    const result = getDaysInMonth(month, year);
    expect(result).toBe(expected);
  });

  it('should calculate February has 29 days when in a leap year', () => {
    const year = 2024;
    const month = 1; // February
    const expected = 29;

    const result = getDaysInMonth(month, year);
    expect(result).toBe(expected);
  });

  // Examples of parameterized tests.

  interface Month {
    name: string;
    month: number;
  }
  it.each<Month>([
    { name: 'January', month: 0 },
    { name: 'March', month: 2 },
    { name: 'May', month: 4 },
    { name: 'July', month: 6 },
    { name: 'August', month: 7 },
    { name: 'October', month: 9 },
    { name: 'December', month: 11 },
  ])('should calculate 31 days for $name', ({ month }) => {
    const expected = 31;
    const year = 2024;

    const result = getDaysInMonth(month, year);
    expect(result).toBe(expected);
  });

  it.each<Month>([
    { name: 'April', month: 3 },
    { name: 'June', month: 5 },
    { name: 'September', month: 8 },
    { name: 'November', month: 10 },
  ])('it should calculate 30 days for $name', ({ month }) => {
    const expected = 30;
    const year = 2024;

    const result = getDaysInMonth(month, year);
    expect(result).toBe(expected);
  });
});
