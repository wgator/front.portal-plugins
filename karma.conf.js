files = [
	JASMINE,
	JASMINE_ADAPTER,
	'build/lib/jquery-1.8.3.min.js',
  'build/lib/bower_modules/vtex-utils.js',
	'build/js/portal-sku-selector.js',
  'build/js/portal-minicart.js',
  'build/js/portal-totalizers.js',
  'build/spec/helpers/*.js',
    {
        pattern: 'build/spec/fixtures/**/*.html',
        watched: true,
        included: false,
        served: true
    },
    {
        pattern: 'build/spec/mocks/**/*.json',
        watched: true,
        included: false,
        served: true
    },
	'build/spec/**/*.js'
];
browsers = [
	'PhantomJS'
];