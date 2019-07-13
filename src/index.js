/**
 * Computes a distance/similarity matrix given an array of data and a distance/similarity function.
 * @param {Array} data An array of data
 * @param {function} distanceFn  A function that accepts two arguments and computes a distance/similarity between them
 * @return {Array<Array>} The distance/similarity matrix. The matrix is square and has a size equal to the length of
 * the data array
 */
export default function distanceMatrix(data, distanceFn) {
  const result = getMatrix(data.length);

  // Compute upper distance matrix
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j <= i; j++) {
      result[i][j] = distanceFn(data[i], data[j]);
      result[j][i] = result[i][j];
    }
  }

  return result;
}

function getMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    matrix.push(row);
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
  }
  return matrix;
}
