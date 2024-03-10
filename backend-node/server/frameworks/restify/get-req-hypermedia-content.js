server.get({name: 'city', path: '/cities/:slug'}, /* ... */);

// in another route
res.send({
  country: 'Australia',
  // render a URL by specifying the route name and parameters
  capital: server.router.render('city', {slug: 'canberra'}, {details: true})
});