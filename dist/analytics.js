"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ana_trackPageView = exports.ana_trackEvent = void 0;
// analytics/index.js
const mixpanel_1 = require("./mixpanel");
const ana_trackEvent = (eventName, properties = {}) => {
    const anaObj = (0, mixpanel_1.analyticsActive)();
    if (anaObj) {
        anaObj.track(eventName, properties);
    }
};
exports.ana_trackEvent = ana_trackEvent;
const ana_trackPageView = (pageName) => {
    (0, exports.ana_trackEvent)("Page View", { Page_Name: pageName });
};
exports.ana_trackPageView = ana_trackPageView;
