const isNegativeZero = (number : number) : boolean => {
    return number === 0 && (1 / number) === -Infinity;
};

/**
 * Returns a base-10 integer from a NumericString or Number.
 * Returns `NaN` if `input` can't be coerced to an integer
 *
 * @throws {ReferenceError} - If no input is provided
 */
const decInt = (input : number | string) : number => {
    if (input === '') {
        throw new ReferenceError('Required parameter "input" was not set.');
    }

    if (typeof input === 'number' && isNegativeZero(input)) {
        return -0;
    } else {
        return parseInt(String(input), 10);
    }
};

export default decInt;