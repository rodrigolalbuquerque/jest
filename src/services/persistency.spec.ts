import { Persistency } from './persistency';

describe('Persistency', () => {
  it('should return undefined', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });
});
