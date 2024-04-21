import { calculateTotal } from './utils';
import { Calculator } from './calculator';

// Mocking the Calculator class
jest.mock('./calculator');

describe('calculateTotal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calculates the total correctly', () => {
    // Mocking the add method of Calculator
    Calculator.prototype.add = jest.fn().mockImplementation((a, b) => a + b);

    const items = [1, 2, 3, 4];
    const expectedTotal = 10;

    const result = calculateTotal(items);

    expect(result).toBe(expectedTotal);
    expect(Calculator.prototype.add).toHaveBeenCalledTimes(4);
    expect(Calculator.prototype.add).toHaveBeenCalledWith(0, 1);
    expect(Calculator.prototype.add).toHaveBeenCalledWith(1, 2);
    expect(Calculator.prototype.add).toHaveBeenCalledWith(3, 3);
  });
});