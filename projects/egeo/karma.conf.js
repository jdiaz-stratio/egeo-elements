// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');

function parseTestPattern(argv) {
   var found = false;
   var pattern = argv.map(function(v) {
      if (found) {
         return v;
      }
      if (v === '--') {
         found = true;
      }
   }).
   filter(function(a) {
      return a
   }).
   join(' ');
   return pattern ? ['--grep', pattern] : [];
}

var args = parseTestPattern(process.argv);

module.exports = function(config) {
   config.set({
      basePath: path.join(__dirname, '../..'),
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
         require('karma-jasmine'),
         require('karma-phantomjs-launcher'),
         require('karma-mocha-reporter'),
         require('karma-junit-reporter'),
         require('karma-coverage-istanbul-reporter'),
         require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
         clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      reporters: ['mocha', 'junit'],
      mochaReporter: {
         ignoreSkipped: args && args.length > 0
      },
      // the default configuration
      junitReporter: {
         outputDir: 'target/surefire-reports', // results will be saved as $outputDir/$browserName.xml
         outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
         suite: ''
      },
      coverageIstanbulReporter: {
         dir: require('path').join(__dirname, 'coverage'),
         reports: ['cobertura', 'html', 'lcovonly', 'text-summary', 'json'],
         dir: 'target',
         fixWebpackSourcePaths: true,
         'report-config': {
            html: {
               subdir: 'html'
            },
            cobertura: {
               file: 'coverage.xml'
            },
            lcovonly: {
               file: 'lcovUT.info'
            },
            json: {
               subdir: 'coverage',
               file: 'coverage.json'
            }
         }
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['PhantomJS'],
      singleRun: false,
      failOnEmptyTestSuite: false
   });
};
