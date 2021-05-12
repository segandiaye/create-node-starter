'use strict';

const path = require('path');
const {writeFile, mkdir} = require('fs').promises;

const server_app = require('./server_app');
const server_routes = require('./server_routes');
const server_package = require('./server_package');
const server_home_ctrl = require('./server_home_ctrl');
const server_start = require('./server_start');

async function build(project_name) {
    server_package.name = project_name;

    const project_directories = `${project_name}/src/controller`;
    const src_path = `${project_name}/src`;
    const ctrl_path = `${src_path}/controller`;

    // Create all directories needed
    await mkdir(project_directories, {recursive: true});

    // Create necessary files
    await writeFile(path.join(project_name, '/package.json'), JSON.stringify(server_package, null, '  '), 'utf8');
    await writeFile(path.join(src_path, '/app.js'), server_app, 'utf8');
    await writeFile(path.join(src_path, '/routes.js'), server_routes, 'utf8');
    await writeFile(path.join(ctrl_path, '/home.js'), server_home_ctrl, 'utf8');
    await writeFile(path.join(src_path, '/start.js'), server_start, 'utf8');
}

module.exports = build;
