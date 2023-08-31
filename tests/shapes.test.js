const Shapes = require('../lib/shapes.js');

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const shapes = new shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(shapes.render).toThrow(err);
  });
});
