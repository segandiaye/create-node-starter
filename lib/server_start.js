'use strict';

const start = `'use strict';

const app = require('./app');
const SERVER_PORT = 8888;
const SERVER_IP = '127.0.0.1';

app.listen(SERVER_PORT, SERVER_IP, function() {
    console.log(\`Running on http://localhost:\${this.address().port}.\`); // eslint-disable-line no-console
});`;

module.exports = start;
