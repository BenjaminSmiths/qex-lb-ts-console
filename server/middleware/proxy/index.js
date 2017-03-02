const proxy = require('http-proxy');

module.exports = function (options) {
  console.log('create proxy server');
  proxy.createProxyServer(options);
};
