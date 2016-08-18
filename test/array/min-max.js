'use strict';

var stat = require('../../array');

describe('min-max', function () {

    var arr = [5, 10, -4, 3, 1, -16, 32, 14, -3, 9];

    it('should find the min value', function () {
        stat.min(arr).should.equal(-16);
    });

    it('should find the max value', function () {
        stat.max(arr).should.equal(32);
    });

    it('should find min and max values', function () {
        var result = stat.minMax(arr);
        result.should.be.an.Object();
        result.min.should.equal(-16);
        result.max.should.equal(32);
    });

});
