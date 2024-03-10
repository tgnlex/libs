server.get('/', function(req, res, next) {
  res.send('home')
  return next();
});
