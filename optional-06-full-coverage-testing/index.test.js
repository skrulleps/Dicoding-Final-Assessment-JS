import sum from './index.js';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('sum', () => {
    it('should return the sum of two numbers (Correct)', () => {
        // Arrange
        const a = 1;
        const b = 2;

        // Act
        const actual = sum(a, b);

        // Assert
        const expected = 3;
        assert.strictEqual(actual, expected);
    });

    it('should return 0 if string passed on numA parameter', () => {
        // Arrange
        const a = '1';
        const b = 2;

        // Act
        const actual = sum(a, b);

        // Assert
        const expected = 0;
        assert.strictEqual(actual, expected);
    });

    it('should return 0 if string passed on numB parameter', () => {
        // Arrange
        const a = 1;
        const b = '2';

        // Act
        const actual = sum(a, b);

        // Assert
        const expected = 0;
        assert.strictEqual(actual, expected);
    });

    it('should return 0 if a or b is negative', () => {
        // Arrange
        const a = -1;
        const b = 2;

        // Act
        const actual = sum(a, b);

        // Assert
        const expected = 0;
        assert.strictEqual(actual, expected);
    });

    it('should return 0 if both a and b are negative', () => {
        // Arrange
        const a = -1;
        const b = -2;

        // Act
        const actual = sum(a, b);

        // Assert
        const expected = 0;
        assert.strictEqual(actual, expected);
    });
});
