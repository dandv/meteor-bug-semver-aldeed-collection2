Package.describe({
  name: 'some:collection',
  version: '0.0.1',
  summary: 'Some collection',
});

Package.onUse(function(api) {
  api.use('aldeed:collection2');
});
