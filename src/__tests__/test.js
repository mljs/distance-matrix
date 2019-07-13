import distanceMatrix from '..';

describe('distance-matrix test', () => {
  it('identity distance (0 if the same, 1 if not', () => {
    // [1, 0, 1, 1]
    // =>
    // [0, 1, 0, 0]
    // [1, 0, 1, 1]
    // [0, 1, 0, 0]
    // [0, 1, 0, 0]
    const result = distanceMatrix([1, 0, 1, 1], (a, b) => Number(a !== b));
    expect(result).toStrictEqual([
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]);
  });
});
