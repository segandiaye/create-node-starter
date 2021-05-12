'use strict';

const package_schema = {
    name: 'node-server-starter',
    version: '1.0.0',
    description: 'Node server app starter',
    main: 'src/start.js',
    scripts: {
        start: 'node src/start.js'
    },
    dependencies: {
        express: '^4.17.1',
        morgan: '^1.10.0'
    }
};

module.exports = package_schema;
