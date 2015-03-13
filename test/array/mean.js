'use strict';

var stat = require('../../array');

describe('mean', function () {

    var arr1 = [4, 36, 45, 50, 75];
    var arr2 = [3, 3, 3];

    it('arithmetic mean', function () {
        stat.mean(arr1).should.equal(42);
        stat.arithmeticMean(arr1).should.equal(42);
        stat.mean(arr2).should.equal(3);
    });

    it('geometric mean', function () {
        stat.geometricMean(arr1).should.be.approximately(30, 1e-6);
        stat.geometricMean(arr2).should.equal(3);
    });

    it('log mean', function () {
        Math.exp(stat.logMean(arr1)).should.be.approximately(30, 1e-6);
    });

    it('grand mean', function () {
        var means = [1, 2, 3];
        var sizes = [2, 5, 3];
        stat.grandMean(means, sizes).should.equal(2.1);
    });

    it.skip('truncated mean', function () {
        var unsorted = [3, 1, 6, 14, 12];
        var sorted = unsorted.slice().sort();
        stat.truncatedMean(unsorted, 0.2).should.equal(7);
        stat.truncatedMean(sorted, 0.2, true).should.equal(7);
        stat.truncatedMean(sorted, 0.5).should.equal(6);
    });

});
