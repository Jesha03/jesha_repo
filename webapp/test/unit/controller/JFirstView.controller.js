/*global QUnit*/

sap.ui.define([
	"jfirstproject/controller/JFirstView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JFirstView Controller");

	QUnit.test("I should test the JFirstView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
