/*
The purpose of this project was to gain experience using basic programming logic in Javascript.
*/

function fibonacciGenerator(n) {
  var sequence = [0, 1]
  if (n <= 2) {
    return sequence.slice(0, n)
  }
  else {
    for (var i = 0; i < (n - 2); i ++) {
      var nextNum = sequence[sequence.length-1] + sequence[sequence.length-2];
      sequence.push(nextNum)
    }
  }
  return sequence
}
