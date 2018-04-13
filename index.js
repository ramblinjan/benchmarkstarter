
const Benchmark = require('benchmark');
const generate = require('./generate');
const getTarget = require('./getTarget');

const linearSearch = require('./linearSearch');

const length = process.argv[2] || 1000;

let targetArray = generate(length);
let targetValue = getTarget(targetArray);

const suite = new Benchmark.Suite();

suite
  .add('linear search', () => {
    linearSearch(targetArray, targetValue);
  })
  .on('start', function start() {
    console.log('Beginning benchmark...');
  })
  .on('complete', function report() {
    // Get successful benchmark.
    const benchmark = Benchmark.filter(this, 'successful')[0];

    console.log('On average, ' + benchmark.name + ' took ' + benchmark.stats.mean + ' seconds to complete.');

    const fastest = Benchmark.filter(this, 'fastest');

    console.log('The fastest was: ', fastest.name);
  })
  .run();