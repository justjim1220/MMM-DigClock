/* MagicMIrror Module - MMM-DigClock
 *
 * This is a module for the [MagicMirror² By Michael Teeuw http://michaelteeuw.nl]
 * (https://github.com/MichMich/MagicMirror/).
 *
 * The digital only part of the default MM2 clock
 * written by Michael Teeuw http://michaelteeuw.nl]
 *
 * I wanted a way to use both the digital and analog clocks
 * on different pages of my MM2. And I wanted to to have it look
 * like the "old school" digital clocks!
 *
 * NOT tested with Raspberry Pi or Linux-Based systems.
 * It DOES work with Windows 10!!!
 *
 * version: 1.0.0
 *
 * Modified module by Jim Hallock (justjim1220@gmail.com)
 * Fixed the Seconds bug by Ramez (@theramez)
 * Licensed with a crapload of good ole' Southern Sweet Tea
 * and a lot of Cheyenne Extreme Menthol cigars!!!
 */

Module.register("MMM-DigClock", {
	// Module config defaults.
	defaults: {
		timeFormat: config.timeFormat,
		showDate: true,
		showWeek: false,
		showSeconds: false,
		dateFormat: "ddd, ll",
		timezone: "America/Chicago"
	},

	requiresVersion: "2.1.0",


	// Define required scripts.
	getScripts: function() {
		return ["moment.js", "moment-timezone.js"];
	},

	// Define styles.
	getStyles: function() {
		return ["MMM-DigClock.css", "DS-Digital.css"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);

		"use strict",

		// Set locale.
		moment.locale(config.language);

	},

	getDom: function() {

		var wrapper = document.createElement("div");

		var dateWrapper = document.createElement("div");
		var timeWrapper = document.createElement("div");
		var weekWrapper = document.createElement("div");

		dateWrapper.className = "date";
		timeWrapper.className = "time";
		weekWrapper.className = "week";

		var timeString;
		var now = moment();
		if (this.config.timezone) {
			now.tz(this.config.timezone);
		}

		var hourSymbol = "HH";
		if (this.config.timeFormat !== 24) {
			hourSymbol = "h";
		}
		if(this.config.showSeconds){
			timeString = now.format(hourSymbol + ":mm" + ":ss");
		}
		else {
			timeString = now.format(hourSymbol + ":mm");
		}
		if(this.config.showDate){
			dateWrapper.innerHTML = now.format(this.config.dateFormat);
		}
		if (this.config.showWeek) {
			weekWrapper.innerHTML = this.translate("WEEK", { weekNumber: now.week() });
		}
		timeWrapper.innerHTML = timeString;

		digitalWrapper = document.createElement("div");
		digitalWrapper.className = "digital";
		digitalWrapper.appendChild(dateWrapper);
		digitalWrapper.appendChild(timeWrapper);
		digitalWrapper.appendChild(weekWrapper);

		wrapper.appendChild(digitalWrapper);

		return wrapper;
	}
});
