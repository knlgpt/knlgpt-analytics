// analytics/index.js
import { analyticsActive } from "./mixpanel";

export const ana_trackEvent = (eventName: string, properties = {}) => {
	const anaObj = analyticsActive();
	if (anaObj) {
		anaObj.track(eventName, properties);
	}
};

export const ana_trackPageView = (pageName: string) => {
	ana_trackEvent("Page View", { Page_Name: pageName });
};
