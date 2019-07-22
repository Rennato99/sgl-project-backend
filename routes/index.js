const express = require('express');
const app = express();

app.use(require('./user.js'));
app.use(require('./rol'));
app.use(require('./room'));
app.use(require('./access_permission'));
app.use(require('./login'));
module.exports = app;