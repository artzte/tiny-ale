const proxyPath = 'api';

module.exports = function (app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  // eslint-disable-next-line global-require
  const proxy = require('http-proxy').createProxyServer({ target: 'http://localhost:3000' });

  proxy.on('error', (err, req) => {
    // eslint-disable-next-line no-console
    console.error(err, req.url);
  });

  app.use(proxyPath, (req, res) => {
    // include root path in proxied request
    req.url = `${proxyPath}/${req.url}`;
    proxy.web(req, res, { target: '' });
  });
};
