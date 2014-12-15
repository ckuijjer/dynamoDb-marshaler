'use strict';

var _ = require('lodash');

module.exports = function (item) {
    if (!_.isArray(item)) {
        return null;
    }

    if (!_.every(item, _.isString)) {
        return null;
    }

    return {SS: item};
};