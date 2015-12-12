function MockChart() {
  this.chart = {
    prop : 1
  };

  this.data = {
    prop : 2
  };
}

describe('lava.js core functions', function() {

  describe('lava.getChart()', function() {

    beforeEach(function() {
      lava.charts = {
        "LineChart" : {
          "TestChart" : new MockChart()
        }
      };
    });

    it('should return a valid chart to the callback.', function() {
      lava.getChart('TestChart', function (chart) {
        expect(chart.prop).toEqual(1);
      });
    });

    it('should throw an error if the chart is not found.', function() {
      expect(function () { lava.getChart('Bee Population', function(){}); })
        .toThrow(new Error('[Lavacharts] Chart "Bee Population" was not found.'));
    });

    it('should throw an error if a string chart label is not given.', function() {
      expect(function () { lava.getChart([], function(){}); })
        .toThrow(new Error('[Lavacharts] object is not a valid chart label.'));
    });

    it('should throw an error if a function callback is not given.', function() {
      expect(function () { lava.getChart('TestChart', {}); })
        .toThrow(new Error('[Lavacharts] object is not a valid callback.'));
    });

  });

});
