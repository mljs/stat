'use strict';

var stat = require('../..').matrix;

describe('min-max', function () {

    var mat = [[5, 10], [-4, 3], [1, -16], [32, 14], [-3, 9]];

    it('should find the min value', function () {
        stat.min(mat).should.equal(-16);
    });

    it('should find the max value', function () {
        stat.max(mat).should.equal(32);
    });

    it('should find min and max values', function () {
        var result = stat.minMax(mat);
        result.should.be.an.Object();
        result.min.should.equal(-16);
        result.max.should.equal(32);
    });

});
