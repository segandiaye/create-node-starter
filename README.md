# create-node-starter

[![NPM version](http://img.shields.io/npm/v/create-node-starter.svg)](https://www.npmjs.org/package/create-node-starter)
[![Build Status](https://travis-ci.org/segandiaye/create-node-starter.svg?branch=main)](https://travis-ci.org/segandiaye/create-node-starter)

This tool allows you to create a Nodejs server easily.

You can adapt it to your needs for example by creating `APIs` or more advanced `user interfaces`.

## Requirement

- Nodejs(`version>=10.15`)

### Installation

```sh
# Using npm
npm install -g create-node-starter
```

### Usage

```sh
create-node-starter PROJECT_NAME
cd PROJECT_NAME/
npm i
npm start
```

To browse your app go to http://localhost:8888

### Project architecture

```sh
PROJECT_NAME
├── package.json
└── src
    ├── app.js
    ├── controller
    │   └── home.js
    ├── routes.js
    └── start.js
```
