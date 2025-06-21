import { Mixpanel } from "mixpanel-react-native";

const MIXPANEL_TOKEN = "66df4114d4eca0e36a6963b4182b1289";

let mixpanel: any = null;

export const initAnalytics = async () => {
	const trackAutomaticEvents = false; //disable legacy mobile autotrack
	const useNative = false; //disable Native Mode, use Javascript Mode

	// create new Mixpanel class ̰
	mixpanel = new Mixpanel(MIXPANEL_TOKEN, trackAutomaticEvents, useNative);
	// initialize Mixpanel
	await mixpanel.init();
};

export const analyticsActive = () => {
	if (!mixpanel) {
		console.warn("Mixpanel not initialized yet.");
	}
	return mixpanel;
};
