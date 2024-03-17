

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/404', function(req, res, next){
  let error = new Error('Resource not found.')
  console.log('error')
  res.render('e404.ejs')
});

app.get('/403', function(req, res, next){
    // trigger a 403 error
    var err = new Error('Request not allowed!\n Status: 403')
    err.status = 403;
    console.log(err)
    res.render('e403.ejs')

});

app.get('/500', function(req, res, next){
    let error = new Error('An error has occured')
    err.status = 500;
    console.log(err)
    res.render('e500.ejs')
});

