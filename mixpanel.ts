import { Mixpanel } from "mixpanel-react-native";

let mixpanel: any = null;

export const initAnalytics = async (
	MIXPANEL_TOKEN: string,
	options: {
		trackAutomaticEvents?: boolean;
		useNative?: boolean;
	}
) => {
	const { trackAutomaticEvents = false, useNative = false } = options;

	if (useNative === true) {
		mixpanel = new Mixpanel(MIXPANEL_TOKEN, trackAutomaticEvents, true);
	} else {
		mixpanel = new Mixpanel(MIXPANEL_TOKEN, trackAutomaticEvents, false);
	}
};

export const analyticsActive = () => {
	if (!mixpanel) {
		console.warn("Mixpanel not initialized yet.");
	}
	return mixpanel;
};
