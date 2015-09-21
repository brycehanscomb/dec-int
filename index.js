/**
 * Returns a base-10 integer from a NumericString or Number. Returns `NaN` if `input` can't be coerced to an integer
 *
 * @param {number|string} input
 * @returns {number}
 */
function decInt(input) {
    return parseInt(input, 10);
}

module.exports = decInt;