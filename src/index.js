
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return []
  }
  else {
    let result = []
    for (let i = 0; i < matrix.length; i = i + 1) {
      if (i % 2 !== 0) {
        matrix[i].reverse()
      }
      for (let j = 0; j < matrix[i].length; j = j + 1) {
        result.push(matrix[i][j]);

      }
    }
    return result;
  }

}
