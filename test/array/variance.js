'use strict';

var stat = require('../../array');

describe('variance and standard deviation', function () {

    var data = [15, 13, 17, 7];

    it('variance', function () {
        var v = stat.variance(data);
        v.should.be.approximately(18.667, 1e-3);
        stat.variance(data, true).should.equal(v);
        stat.variance(data, false).should.equal(14);
    });

    it('standard deviation', function () {
        var s = stat.standardDeviation(data);
        stat.standardDeviation(data, true).should.equal(s);
        stat.standardDeviation(data, false).should.equal(Math.sqrt(14));
    });

});
