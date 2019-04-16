const count = require('./index.js');

describe('onclick', () => {
  test('should return 1 when counter = 0', () => {
    expect(count.onclick()).toBe("Click me" + 1);
  }); 
});