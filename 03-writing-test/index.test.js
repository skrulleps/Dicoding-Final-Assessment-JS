import { sum } from './index.js';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
        // Arrange
        const a = 1;
        const b = 2;

        // Act
        const actual = sum(a, b);


        // Assert
        const expected = 3;
        assert.strictEqual(actual, expected);
  });

  it('should return the sum of two negative numbers', () => {
    // Arrange
    const a = -1;
    const b = -2;

    // Act
    const actual = sum(a, b);

    // Assert
    const expected = -3;
    assert.strictEqual(actual, expected);
  });

  it('should throw an error if string passed on numA parameter', () => {
    // Arrange
    const a = '1';
    const b = 2;

    // Act
    const actual = () => sum(a, b);

    // Assert
    const expected = 'Parameter must be a number';
    assert.throws(actual, expected);
  });

  it('should throw an error if string passed on numB parameter', () => {
  // Arrange
    const a = 1;
    const b = '2';

    // Act
    const actual = () => sum(a, b);

    // Assert
    const expected = 'Parameter must be a number';
    assert.throws(actual, expected);
  });
});