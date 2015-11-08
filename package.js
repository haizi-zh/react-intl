Package.describe({
  name: 'zephyre:react-intl',
  version: '0.0.2_3',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for React Intl',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/haizi-zh/react-intl.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'react-intl': '1.2.1',
  'externalify': '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.14.1', 'client');
  api.use('cosmos:browserify@0.8.3', 'client');

  api.addFiles(['react-intl.browserify.js', 'react-intl.browserify.options.json'], 'client');

  api.export('ReactIntl', 'client');
});
