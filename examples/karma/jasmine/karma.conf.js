// Karma configuration
// Generated on Thu Nov 20 2014 14:51:15 GMT+1100 (AEDT)
var path = require("path")
process.env.CHROME_BIN = require("puppeteer").executablePath()

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ".",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine", "pact"],

    // list of files / patterns to load in the browser
    files: [
      // Local development
      // '../../dist-web/pact-web.js',
      "../node_modules/@pact-foundation/pact-web/pact-web.js",
      "client.js",
      "client-spec.js",
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // Pact Providers
    pact: [
      {
        port: 1234,
        consumer: "KarmaJasmineConsumer",
        provider: "KarmaJasmineProvider",
        logLevel: "DEBUG",
        log: path.resolve(process.cwd(), "logs", "pact.log"),
        dir: path.resolve(process.cwd(), "pacts"),
      },
    ],

    plugins: ["karma-*", "@pact-foundation/karma-pact"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome_without_security"],

    customLaunchers: {
      Chrome_without_security: {
        base: "ChromeHeadless",
        flags: ["--disable-web-security", "--disable-site-isolation-trials"],
      },
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  })
}
