var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
});
app.get('/', function (req, res) {
    var dates = [];
    
    for (let index = 0; index < 15; index++) {
        var date = new Date();
        date.setDate(date.getDate() + index);
        dates.push(
        {
            day: date,
            avlb: [
              "08:00","08:00","08:00","08:00","08:00","08:00", "08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"
            ]
        }
        )      
    }
  res.send(dates);
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});