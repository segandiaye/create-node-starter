'use strict';

const server_app = require('../../lib/server_app');
const server_home_ctrl = require('../../lib/server_home_ctrl');
const server_package = require('../../lib/server_package');
const server_routes = require('../../lib/server_routes');
const server_start = require('../../lib/server_start');

describe('interoperability should be ok', () => {

    test('has interoperability', () => {
        expect(server_app).toBeDefined();
        expect(server_home_ctrl).toBeDefined();
        expect(server_package).toBeDefined();
        expect(server_routes).toBeDefined();
        expect(server_start).toBeDefined();
    });

});
