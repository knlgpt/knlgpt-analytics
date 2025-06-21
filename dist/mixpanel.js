"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsActive = exports.initAnalytics = void 0;
const mixpanel_react_native_1 = require("mixpanel-react-native");
const MIXPANEL_TOKEN = "66df4114d4eca0e36a6963b4182b1289";
let mixpanel = null;
const initAnalytics = () => __awaiter(void 0, void 0, void 0, function* () {
    const trackAutomaticEvents = false; //disable legacy mobile autotrack
    const useNative = false; //disable Native Mode, use Javascript Mode
    // create new Mixpanel class ̰
    mixpanel = new mixpanel_react_native_1.Mixpanel(MIXPANEL_TOKEN, trackAutomaticEvents, useNative);
    // initialize Mixpanel
    yield mixpanel.init();
});
exports.initAnalytics = initAnalytics;
const analyticsActive = () => {
    if (!mixpanel) {
        console.warn("Mixpanel not initialized yet.");
    }
    return mixpanel;
};
exports.analyticsActive = analyticsActive;
