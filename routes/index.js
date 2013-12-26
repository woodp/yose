
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'moebius nitrous server for the Yose game' });
};