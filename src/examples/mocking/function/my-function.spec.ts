// Mock the add function
const mockAdd = jest.fn();

// Replace the original add function with the mock
jest.mock('./my-function', () => ({
  ...jest.requireActual('./my-function'),
  add: mockAdd,
}));

import { add } from './my-function';

// Now you can use mockAdd in your tests
describe('mock add function', () => {
  mockAdd.mockReturnValue(5);

  const result = add(2, 3);

  expect(result).toBe(5);
  expect(mockAdd).toHaveBeenCalledWith(2, 3);
});


// Now you can use mockAdd in your tests
describe('mock add function', () => {
    it('should return 5', () => {
        mockAdd.mockReturnValue(5);

        const result = add(2, 3);

        expect(result).toBe(5);
        expect(mockAdd).toHaveBeenCalledWith(2, 3);
    });
});
