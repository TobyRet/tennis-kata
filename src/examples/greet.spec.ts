import greet from './greet'

describe('Greet', () => {
  it('should return a greeting', () => {
    expect(greet()).toBe('Hello, World!');
  });
})
