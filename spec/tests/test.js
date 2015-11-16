var decInt = require('../../index');

describe(
    "The `decInt` module...",
    function() {

        it('should be available from `require()` as a CommonJS module', function() {
            expect(decInt).toBeDefined();
        });

        it('should be a function', function() {
            expect(typeof decInt).toEqual('function');
        });

        it('should require an argument whose value is non-empty', function() {

            expect(function() {
                decInt();
            }).toThrowError(ReferenceError);

            expect(function() {
                decInt(
                    new String()
                );
            }).toThrowError(TypeError);

            expect(function() {
                decInt('SOME_VALUE')
            }).not.toThrowError(ReferenceError);

        });

        describe('type checker...', function() {

            describe('when checking for number types...', function() {

                it('should pass with ordinary numbers', function() {

                    expect(function() {
                        decInt(5789);
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(0);
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(-0);
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(-1);
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(-5789);
                    }).not.toThrowError(TypeError);

                });

                it('should pass with special numbers', function() {

                    expect(function() {
                        decInt(
                            00000
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            0.0000
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Number.MAX_VALUE
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Number.MIN_VALUE
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Number.NEGATIVE_INFINITY
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Number.POSITIVE_INFINITY
                        );
                    }).not.toThrowError(TypeError);

                });

                it('should pass with fancy numbers', function() {

                    expect(function() {
                        decInt(
                            Infinity
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.E
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.LN2
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.LN10
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.LOG2E
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.LOG10E
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.PI
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.SQRT1_2
                        );
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            Math.SQRT2
                        );
                    }).not.toThrowError(TypeError);

                });

                it('should pass with silly `Number` usages', function() {

                    expect(function() {
                        decInt(
                            new Number()
                        )
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            new Number(5)
                        )
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            new Number(Infinity)
                        )
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            new Number(-5)
                        )
                    }).not.toThrowError(TypeError);

                });

            });

            describe('when checking for string types...', function() {

                it('should pass with non-empty strings', function() {

                    [
                        ' ',
                        'a',
                        'new String()',
                        'SOME_STRING_HERE',
                        '5555',
                        ' a',
                        'a ',
                        ' a '
                    ].forEach(function(input) {
                        expect(function() {
                            decInt(input)
                        }).not.toThrowError(
                            TypeError
                        );
                    });

                });

                it('should pass with silly `String` usages', function() {

                    expect(function() {
                        decInt(
                            new String(' ')
                        )
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            new String(' a ')
                        )
                    }).not.toThrowError(TypeError);

                    expect(function() {
                        decInt(
                            new String('SOME_STRING_HERE')
                        )
                    }).not.toThrowError(TypeError);

                });

            });

        });

        it('should return base-10 integers unchanged', function() {

            var input;

            input = 5;
            expect(
                decInt(input)
            ).toEqual(input);

            input = -5;
            expect(
                decInt(input)
            ).toEqual(input);

            input = 900;
            expect(
                decInt(input)
            ).toEqual(input);

            input = 900;
            expect(
                decInt(input)
            ).toEqual(input);

            input = 0;
            expect(
                decInt(input)
            ).toEqual(input);

            input = -0;
            expect(
                decInt(input)
            ).toEqual(input);

        });

        it('should return non-base-10 integers as base-10 integers', function() {

            expect(
                decInt(
                    0.5
                )
            ).toEqual(
                0
            );

            expect(
                decInt(
                    -0.5
                )
            ).toEqual(
                0
            );

            expect(
                decInt(
                    -5.0
                )
            ).toEqual(
                -5
            );

            expect(
                decInt(
                    5.0
                )
            ).toEqual(
                5
            );

            expect(
                decInt(
                    5.6
                )
            ).toEqual(
                5
            );

            expect(
                decInt(
                    (10/3)
                )
            ).toEqual(
                3
            );

        });

        it('should trim the decimal points from floats and return a whole number', function() {
            pending('Test not written yet.');
        });
        it('should accept numeric strings and return their numeric base-10 value', function() {
            pending('Test not written yet.');
        });
        it('should return NaN for non-numeric strings', function() {
            pending('Test not written yet.');
        });
        it('should return NaN for strings that have non-numeric characters in them', function() {
            pending('Test not written yet.');
        });
    }
);