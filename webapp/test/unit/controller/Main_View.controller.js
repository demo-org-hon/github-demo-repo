/*global QUnit*/

sap.ui.define([
	"demo/github_demo/controller/Main_View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main_View Controller");

	QUnit.test("I should test the Main_View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
