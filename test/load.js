'use strict';

describe('Different ways to load util', function () {
    it('Should load the matrix part of the library', function () {
        require('../matrix');
    });

    it('Should load the array part of the library', function () {
        require('../array');
    });
});