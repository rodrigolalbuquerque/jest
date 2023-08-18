describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9);
  });
});

describe('Objects', () => {
  it('should be equal to anotherPerson', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
  });

  it('should have property age', () => {
    const person = { name: 'Luiz', age: 30 };

    expect(person).toHaveProperty('age');
  });
});
