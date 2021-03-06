'use strict';

var stat = require('../../array');

describe('Robust estimators', function () {
    //Gaussian random numbers with mean = 1 and std = 1
    var arr1 = [-0.374, -0.235, -0.229, 1.662, 0.74, 1.441, 1.004, 1.145, 0.216, 0.723, 2.845, 0.363, 1.778, 0.908, 2.098, -0.018, 0.467, 0.214, 0.443, 0.052, 2.417, 2.226, 2.69, 0.354, -0.479, 0.302, 0.289, 2.261, 2.456, 0.399, 1.595, 0.947, 2.174, 0.241, 0.515, 1.741, 1.809, 0.035, 1.058, -1.269, 0.896, 2.02, 0.678, 0.417, 2.658, 0.379, -0.083, 1.146, 2.19, 1.104, 1.493, 1.666, 0.445, 0.584, 0.285, 1.228, -0.152, 0.397, 2.624, 1.033, 1.858, 0.753, -0.212, 0.773, 1.299, 1.068, -0.086, 0.624, 0.444, 0.098, 0.634, 1.829, 1.143, 0.102, 0.588, 2.024, 1.599, 2.396, 1.467, 0.639, 0.567, 0.864, 0.828, 1.7, 1.579, 0.152, 0.585, 0.408, 0.067, -0.01, 2.359, -0.12, 1.083, 3.843, 0.494, 1.443, 1.151, 0.424, 1.104, 2.992];
    it('mean and std', function () {
        var result = stat.robustMeanAndStdev(arr1);
        result.mean.should.approximately(1, 5e-1);
        result.stdev.should.approximately(1, 5e-1);
    });
});
