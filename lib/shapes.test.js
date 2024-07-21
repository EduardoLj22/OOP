const { Circle, Triangle, Square } = require('./shapes');

test('Circle render method returns correct SVG string', () => {
  const shape = new Circle('green');
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test('Triangle render method returns correct SVG string', () => {
  const shape = new Triangle('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square render method returns correct SVG string', () => {
  const shape = new Square('red');
  expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
});