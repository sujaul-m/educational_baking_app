//localhost original
// module.exports = {
// plugins: {
//   autoprefixer: {}
// }

//Heroku edit below
const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/'
      }
    }
  },
  plugins: {
    autoprefixer: {}
  }
}
