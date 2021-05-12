#!/usr/bin/env node

'use strict';

const parseArgs = require('yargs-parser');

const build = require('../lib/main');

const args = parseArgs(process.argv.slice(2));

(async()=>{

    if (args._.length != 1) {
        printUsage();
        throw new Error('Wrong number of arguments');
    }

    const project_name = args._[0].toLowerCase();

    try {
        await build(project_name);
    } catch (err) {
        process.exitCode = 1;
    }
})();

function printUsage() {
    // eslint-disable-next-line no-console
    console.log(`
Usage:
$ create-node-starter PROJECT_NAME
Examples:
$ create-node-starter my-node-starter-app
                 `);
}
