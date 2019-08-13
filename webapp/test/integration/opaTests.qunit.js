/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jp/co/nttdata-gsl/test_20190813/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});