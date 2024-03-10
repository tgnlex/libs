function renderMustache() {
  const template = document.getElementById('template').innerHTML;
  const rendered = Mustache.render(template, { name: 'anon'
  document.getElementById('target').innerHTML = rendered;
	});
}
