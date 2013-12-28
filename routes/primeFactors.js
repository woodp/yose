/*
 * GET home page.
 */
function isArray(object) {
  return object != null && typeof object === "object" &&
    'splice' in object && 'join' in object;
}

function decompose(number)
{
  var input = parseInt(number);
  var body = {
    "number" : number
  };

  if(input > 1000000)
  {
    body.error = "too big number (>1e6)";
    return body;
  }
  
  if(isNaN(input))
  {
    body.error = "not a number";
    return body;
  }
    
  var decomp = [];
  var div = input;
  while(div > 1)
  {
    for(i = 2; i <= div; i++)
    {
      if(div % i == 0)
      {
        div = div / i;
        decomp
        .push(i);
        break;
      }
    }
  }
  body.decomposition = decomp;
    
  return body;
}

exports.index = function(req, res){
  if(isArray(req.query.number))
  {
    var body = [];
    req.query.number.forEach(function(number){
      body.push(decompose(number));
    });
  }
  else
  {
    body = decompose(req.query.number);
  }
  
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
};

exports.ui = function(req, res){
  res.render('ui', { title: 'ui - yose level 2.6' });
}