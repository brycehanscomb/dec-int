'use strict';

var isNotSet = require('is-not-set');
var isNegativeZero = require('is-negative-zero');

/**
 * Returns a base-10 integer from a NumericString or Number.
 * Returns `NaN` if `input` can't be coerced to an integer
 *
 * @module
 *
 * @param {(number|string)} input
 *
 * @throws {ReferenceError} - If no input is provided
 * @throws {TypeError} - If `input` is not of type String or Number
 *
 * @returns {number}
 */
function decInt(input) {

    if (isNotSet(input)) {
        throw new ReferenceError('Required parameter "input" was not set.');
    }

    if (
        (input instanceof String) === true &&
        input.valueOf() === ''
    ) {
        throw new TypeError('Required parameter "input" cannot be an empty String constructor.');
    }

    if (
        (typeof input !== 'string') &&
        (typeof input !== 'number') &&
        ((input instanceof String) === false) &&
        ((input instanceof Number) === false)
    ) {
        throw new TypeError('Parameter "input" was not of type Number or String.');
    }

    if (isNegativeZero(input)) {
        return -0;
    } else {
        return parseInt(input, 10);
    }

}

module.exports = decInt;