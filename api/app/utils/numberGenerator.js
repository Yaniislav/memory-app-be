const MAX = 100;

function generate(count) {
  const resultSet = new Set();
  let i = 0;

  while (i < count) {
    const number = Math.floor(Math.random() * Math.floor(MAX))
    if (!resultSet.has(number)) {
      resultSet.add(number);
      i++;
    }
  }
  
  return Array.from(resultSet);
}

module.exports = generate;