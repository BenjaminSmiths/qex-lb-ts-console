'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const winston = require('winston');

const app = module.exports = loopback();
const PORT = process.env.PORT || 8080;

app.start = () => {
    // start the web server
    return app.listen(PORT, (err) => {
        if (err) {
            winston.error(err);
            return;
        }

        app.emit('started');

        if (process.env.NODE_ENV === 'dev') {
            // In Dev mode show some info love to our friends.
            const baseUrl = app.get('url').replace(/\/$/, '');
            winston.info('Web server listening at: %s', baseUrl);
            if (app.get('loopback-component-explorer')) {
                const explorerPath = app.get('loopback-component-explorer').mountPath;
                winston.info('Browse your REST API at %s%s', baseUrl, explorerPath);
            }
        } else {
            winston.info(`Listening on port ${PORT}`);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module) {
        app.start();
    }
});
