/*
 * GET home page.
 */

exports.index = function(req, res){
  var input = parseInt(req.query.number);
  var body = {
    "number" : req.query.number
  };

  if(isNaN(input) == false)
  {
    var decomp = [];
    var div = input;
    while(div > 1)
    {
      div = div / 2;
      decomp.push(2);
    }
    body.decomposition = decomp;
  }
  else
  {
    body.error = "not a number";
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
};