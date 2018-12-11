var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'lib.js',
    library: 'lib',
    libraryTarget: 'umd'
  }
};
