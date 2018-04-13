
const generate = length => 
  Array.from(Array(length))
    .map(
      () => Math.ceil(Math.random() * length)
    );

module.exports = generate;