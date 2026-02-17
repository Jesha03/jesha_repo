sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/m/Page",
    "sap/m/Button",
    "sap/m/Text"
], function (View, Page, Button, Text) {
    "use strict";

    return View.extend("my.app.view.Main", {

        getControllerName: function () {
            return "my.app.controller.Main";
        },

        createContent: function (oController) {

            var oText = new Text({
                text: "Hello from JS View!"
            });

            var oButton = new Button({
                text: "Click Me",
                press: oController.onPress
            });

            return new Page({
                title: "JS View Example",
                content: [oText, oButton]
            });
        }
    });
});