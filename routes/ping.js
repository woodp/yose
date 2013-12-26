exports.index = function(req, res){
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end("{ \"alive\" : true }");
};