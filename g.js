
var jsregression = require('js-regression');
module.exports = 
{
  regress: function (data) 
  {
     var regression = new jsregression.LinearRegression({
        alpha: 0.0001,
        iterations: 100,
        lambda: 0.1
      }); 
      var model5= regression.fit(data);
      console.log(model5);
      var actual_y = -1;
      var predicted_y = regression.transform([1,1,4,25,24,11,35,235,215,199,1448,254,5,320,259,-21]);
      console.log("actual: " + actual_y + " predicted: " + Math.round(predicted_y));
  },
  gsum: function (a,b)
  {
    
    var c = a + b;
    console.log('Inside Function');
    return c;
  }
};
