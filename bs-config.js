const proxyMiddleware = require('http-proxy-middleware');
const proxyURL = 'http://172.16.1.98:8080';

module.exports = {
    ghostMode : false,
    server : {
        middleware : [proxyMiddleware('/homeport', { target : proxyURL })]
    }
};