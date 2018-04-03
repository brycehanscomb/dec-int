import { describe, it } from 'mocha';
import { expect } from 'chai';

import decInt from './index';

describe("The `decInt` module...", () => {

    it('should require an argument whose value is non-empty', () => {

        expect(
            () => decInt('SOME_VALUE')
        ).not.to.throw(
            ReferenceError
        );

    });

    describe('type checker...', () => {

        describe('when checking for string types...', () => {

            it('should throw an error on empty string', () => {
                expect(
                    () => decInt('')
                ).to.throw(
                    ReferenceError
                )
            });

            it('should pass with non-empty strings', () => {

                [
                    ' ',
                    'a',
                    'new String()',
                    'SOME_STRING_HERE',
                    '5555',
                    ' a',
                    'a ',
                    ' a '
                ].forEach(input => {
                    expect(
                        () => decInt(input)
                    ).not.to.throw(
                        TypeError
                    );
                });

            });

        });

    });

    it('should return base-10 integers unchanged', () => {

        let input;

        input = 5;
        expect(
            decInt(input)
        ).to.equal(
            input
        );

        input = -5;
        expect(
            decInt(input)
        ).to.equal(
            input
        );

        input = 900;
        expect(
            decInt(input)
        ).to.equal(
            input
        );

        input = 900;
        expect(
            decInt(input)
        ).to.equal(
            input
        );

        input = 0;
        expect(
            decInt(input)
        ).to.equal(
            input
        );

        input = -0;
        expect(
            decInt(input)
        ).to.equal(
            input
        );

    });

    it('should return non-base-10 integers as base-10 integers', () => {

        expect(
            decInt(0.5)
        ).to.equal(
            0
        );

        expect(
            decInt(-0.5)
        ).to.equal(
            0
        );

        expect(
            decInt(-5.0)
        ).to.equal(
            -5
        );

        expect(
            decInt(5.0)
        ).to.equal(
            5
        );

        expect(
            decInt(5.6)
        ).to.equal(
            5
        );

        expect(
            decInt(10/3)
        ).to.equal(
            3
        );

    });

    it('should trim the decimal points from floats and return a whole number', () => {
        const inputs : Array<[any, number]> = [
            [0.0, 0],
            [0.00005, 0],
            [1234.56, 1234],
            [1234.0000, 1234],
            [Math.PI, 3]
        ];

        inputs.forEach(testTuple);
    });

    it('should accept numeric strings and return their numeric base-10 value', () => {
        const inputs : Array<[any, number]> = [
            ['5', 5],
            ['0.00005', 0],
            ['1234.56', 1234],
            ['0xFFFFFF', 0],
            ['020', 20]
        ];

        inputs.forEach(testTuple);
    });

    it('should return NaN for non-numeric strings', () => {
        const inputs = [
            "Infinity",
            "Math.PI",
            "PI",
            "e",
            'Hello 1234',
            '.......',
            '@0@0@0@0'
        ];

        inputs.forEach(value => {
            expect(
                Number.isNaN(decInt(value))
            ).to.be.true;
        });
    });

    it('should return zero for any input that is equivalent to negative-zero (except negative-zero', () => {
        const inputs : Array<[any, number]> = [
            ['0', 0],
            [0, 0],
            ['-0', 0],
            ['-0.5', 0]
        ];

        inputs.forEach(testTuple);
    });

    it('should return negative-zero for an input of negative-zero', () => {
        expect(
            decInt(-0)
        ).to.equal(
            -0
        );
    });
});

const testTuple = ([input, expected] : [ any, number ]) : void => {
    expect(
        decInt(input)
    ).to.equal(
        expected
    );
};