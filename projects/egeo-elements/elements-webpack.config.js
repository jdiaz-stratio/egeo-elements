const uuidv1 = require('uuid/v1');

module.exports = {
    output: {
        jsonpFunction: 'egeo-' + uuidv1(),
        library: 'elements',
    },
};
