sap.ui.define([
    "sap/ui/core/mvc/XMLView"

], function(XMLView) {
    "use strict";
    
    XMLView.create({
        viewName: "quantda.fiori.ui5demo.walkthrough.view.App"
    }).then(function(oView) {
        oView.placeAt("content");
    });
});