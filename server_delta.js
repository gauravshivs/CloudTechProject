var jsregression = require('js-regression');
var g = require('./g.js')
var parse = require('csv-parse');

var csvData=[];
//console.log(g.gsum(5,2));
console.log(typeof csvData);
fs.createReadStream('./sample.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        //console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow); 

    })
    .on('end',function() {
      //do something wiht csvData
      //console.log(csvData);
      //console.log(csvData[1]\\);
      const data = csvData;
      console.log('Done');
      
      //console.log(data);
      
      //console.log(g.gsum(3,1));
      g.regress(data);
    });