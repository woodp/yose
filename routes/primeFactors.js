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
      for(i = 2; i <= div; i++)
      {
        if(div % i == 0)
        {
          div = div / i;
          decomp.push(i);
          break;
        }
      }
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