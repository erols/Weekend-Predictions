
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Erol\'s Facebook App' })
};