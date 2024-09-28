function analyzeArray (arr) {
  function avg () {
    return arr.reduce((prev, cur) => prev + cur, 0) / arr.length
  }

  function minimum () {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return min
  }

  function maximum () {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }

  function length () {
    return arr.length
  }

  return {
    average: avg(),
    min: minimum(),
    max: maximum(),
    length: length()
  }
}

module.exports = analyzeArray
