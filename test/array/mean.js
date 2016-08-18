'use strict';

var stat = require('../../array');

describe('mean', function () {

    var arr1 = [4, 36, 45, 50, 75];
    var arr2 = [3, 3, 3];
    var unsorted = [3, 1, 6, 14, 12];
    var sorted = [1, 3, 6, 12, 14];

    it('sum', function () {
        stat.sum(arr1).should.equal(210);
        stat.sum(arr2).should.equal(9);
    });

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

    it('truncated mean', function () {
        stat.truncatedMean(unsorted, 0.2).should.equal(7);
        stat.truncatedMean(sorted, 0.2, true).should.equal(7);
        stat.truncatedMean(sorted, 0.5).should.equal(6);
    });

    it('harmonic mean', function () {
        var arr1 = [1, 2, 4];
        var arr2 = [3, 0, 6];
        stat.harmonicMean(arr1).should.be.approximately(1.714, 1e-3);
        (function () {
            stat.harmonicMean(arr2);
        }).should.throw(RangeError);
    });

    it('contraharmonic mean', function () {
        var arr1 = [1, 5, 6];
        var arr2 = [2, -6, -1];
        stat.contraHarmonicMean(arr1).should.be.approximately(5.167, 1e-3);
        (function () {
            stat.contraHarmonicMean(arr2);
        }).should.throw(RangeError);
    });

    it('median', function () {
        stat.median(unsorted).should.equal(6);
        stat.median(sorted, true).should.equal(6);
        stat.median([2, 4, 6, 8]).should.equal(5);
    });

});
