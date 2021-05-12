'use strict';

const home_ctrl = `'use strict';

function homePage(req, res, next) {
    try {
        res.send('Welcome to node server starter app.');
    } catch (err) {
        console.error(err); // eslint-disable-line no-console
        res.sendStatus(500);
    }
}

module.exports = {
  homePage,
};`;

module.exports = home_ctrl;
