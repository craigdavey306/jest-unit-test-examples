// Demonstration of the Arrange, Act, Assert pattern in unit testing.

import { describe, it, expect } from '@jest/globals';
import { add, sub } from '../math';

describe('add function tests', () => {
  it('should calculate the correct sum for two positive integers', () => {
    // arrange
    const x = 1;
    const y = 2;
    const expected = 3;

    // act
    const result = add(x, y);

    // assert
    expect(result).toBe(expected);
  });

  it('should calculate the correct sum for two negative integers', () => {
    // arrange
    const x = -1;
    const y = -2;
    const expected = -3;

    // act
    const result = add(x, y);

    // assert
    expect(result).toBe(expected);
  });

  it('should return the correct sum when adding a positive and negative number', () => {
    // arrange
    const x = 2;
    const y = -2;
    const expected = 0;

    // act
    const result = add(x, y);

    // assert
    expect(result).toBe(expected);
  });
});

describe('sub function tests', () => {
  it('should calculate the correct difference for two positive numbers when the minuend is larger', () => {
    // arrange
    const minuend = 4;
    const subtrahend = 2;
    const expected = 2;

    // act
    const result = sub(minuend, subtrahend);

    // assert
    expect(result).toBe(expected);
  });

  it('should calculate the correct difference for two negative numbers', () => {
    // arrange
    const minuend = -4;
    const subtrahend = -2;
    const expected = -2;

    // act
    const result = sub(minuend, subtrahend);

    // assert
    expect(result).toBe(expected);
  });

  it('should calculate a positive integer when subtracting a negative integer from a positive one', () => {
    // arrange
    const minuend = 3;
    const subtrahend = -2;
    const expected = 5;

    // act
    const result = sub(minuend, subtrahend);

    // assert
    expect(result).toBe(expected);
  });
});
