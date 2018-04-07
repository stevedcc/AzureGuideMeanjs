'use strict';

/**
 * Module dependencies.
 */
var app = require('./config/lib/app');
const appInsights = require("applicationInsights");
appInsights.setup("4de2599d-e324-4340-a639-b29baa785074");
appInsights.start();
var server = app.start();
