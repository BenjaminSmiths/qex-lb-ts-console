'use strict';

const path = require('path');
const express = require('express');

module.exports = (server) => {
    const distPath = path.join(__dirname, '../../dist');
    const router = server.loopback.Router();
    const indexFileName = 'index.html';

    // Install a `*` for any 404 will return blank
    router.use(express.static(distPath));
    router.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));

    // Install a `/admin/status` route that returns server status
    router.get('/admin/status', server.loopback.status());
    server.use(router);
};
