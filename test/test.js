'use strict';

const distanceMatrix = require('..');

describe('distance-matrix test', function () {
    it('identity distance (0 if the same, 1 if not', function () {
        // [1, 0, 1, 1]
        // =>
        // [0, 1, 0, 0]
        // [1, 0, 1, 1]
        // [0, 1, 0, 0]
        // [0, 1, 0, 0]
        const result = distanceMatrix([1, 0, 1, 1], (a, b) => Number(a !== b));
        result.should.deepEqual([[0, 1, 0, 0], [1, 0, 1, 1], [0, 1, 0, 0], [0, 1, 0, 0]]);
    });
});
