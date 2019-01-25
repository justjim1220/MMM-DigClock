# Module: MMM-DigClock
The `clock` module is one of the default modules of the MagicMirror.
This module is a variation only showing the Digital Clock.
I made this because I wanted to be able to use the 'clock' module on separate pages of my Mirror.
This module displays the current date, week, and time. The information will be updated realtime.

## Screenshots

![ScreenShot](https://github.com/justjim1220/MMM-DigClock/blob/master/Screenshot%20(3).png)

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-DigClock",
		position: "top_left",	// This can be any of the regions.
		config: {
			showDate: true,
			showWeek: false,
			showSeconds: false,
			dateFormat: "ddd, ll",
			timezone: "America/Chicago"
		}
	},
]
````

## Configuration options

The following properties can be configured:

| Option            | Description
| ----------------- | -----------
| `showDate`        | Turn off or on the Date section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `showWeek`        | Turn off or on the Week section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `showSeconds`     | Turn off or on the Seconds. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `dateFormat`      | Configure the date format as you like. <br><br> **Possible values:** [Docs](http://momentjs.com/docs/#/displaying/format/) <br> **Default value:** `"dddd, LL"`
| `timezone`        | Specific a timezone to show clock. <br><br> **Possible examples values:** `"America/New_York"`, `"America/Santiago"`, `Etc/GMT+10` <br> **Default value:** `"America/Chicago"`. See more informations about configuration value [here](https://momentjs.com/timezone/docs/#/data-formats/packed-format/)
