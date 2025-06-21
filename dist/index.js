"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAnalytics = exports.ana_trackPageView = exports.ana_trackEvent = void 0;
var analytics_1 = require("./analytics");
Object.defineProperty(exports, "ana_trackEvent", { enumerable: true, get: function () { return analytics_1.ana_trackEvent; } });
Object.defineProperty(exports, "ana_trackPageView", { enumerable: true, get: function () { return analytics_1.ana_trackPageView; } });
var mixpanel_1 = require("./mixpanel");
Object.defineProperty(exports, "initAnalytics", { enumerable: true, get: function () { return mixpanel_1.initAnalytics; } });
