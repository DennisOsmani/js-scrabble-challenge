function scrabble(word) {
  if (!word || word.trim() === '') return 0

  const letterValues = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  let score = 0
  let wordMultiplier = 1
  let i = 0

  while (i < word.length) {
    let char = word[i].toUpperCase()
    let letterMultiplier = 1

    if (char === '{') {
      letterMultiplier = 2
      i++
      char = word[i].toUpperCase()
    } else if (char === '[') {
      letterMultiplier = 3
      i++
      char = word[i].toUpperCase()
    }

    if (char === '}' || char === ']') {
      i++
      continue
    }

    if (char in letterValues) {
      score += letterValues[char] * letterMultiplier
    }

    i++
  }

  if (word.startsWith('{') && word.endsWith('}')) {
    wordMultiplier = 2
  } else if (word.startsWith('[') && word.endsWith(']')) {
    wordMultiplier = 3
  }

  return score * wordMultiplier
}

module.exports = scrabble
