'use strict';


/**
 * Computes a distance/similarity matrix given an array of data and a distance/similarity function.
 * @param {Array} data An array of data
 * @param {function} distanceFn  A function that accepts two arguments and computes a distance/similarity between them
 * @return {Array<Array>} The similarity matrix. The similarity matrix is square and has a size equal to the length of
 * the data array
 */
function distanceMatrix(data, distanceFn) {
    const length = data.length;
    let result = Array.from({length}).map(() => Array.from({length}));

    // Compute upper distance matrix
    for (let i = 0; i < length; i++) {
        for (let j = 0; j <= i; j++) {
            result[i][j] = distanceFn(data[i], data[j]);
        }
    }

    // Copy to lower distance matrix
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            result[i][j] = result[j][i];
        }
    }

    return result;
}

module.exports = distanceMatrix;
