'use strict';

const routes = `'use strict';

const app = require('./app');

const home = require('./controller/home');
app.route('/').get(home.homePage);`;

module.exports = routes;
