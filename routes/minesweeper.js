
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('minesweeper', { title: 'Minesweeper' });
};